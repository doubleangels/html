import React, { useEffect, useState, useMemo } from 'react';

interface GithubRepo {
  id: number;
  name: string;
  private: boolean;
  html_url: string;
  description: string | null;
}

interface GithubRepoCountProps {
  username?: string;
  className?: string;
  cacheDurationMs?: number;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
}

const GithubRepoCount: React.FC<GithubRepoCountProps> = ({
  username = 'doubleangels',
  className = '',
  cacheDurationMs = 3600000, // 1 hour cache by default
  loadingComponent = <span>Loading...</span>,
  errorComponent = (errorMsg: string) => <span className="error">{errorMsg}</span>,
}) => {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cacheKey = useMemo(() => `github-repos-${username}`, [username]);

  useEffect(() => {
    const fetchData = async () => {
      // Check for cached data first
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        const { count, timestamp } = JSON.parse(cachedData);
        if (Date.now() - timestamp < cacheDurationMs) {
          setRepoCount(count);
          return;
        }
      }

      setIsLoading(true);
      setError(null);

      try {
        let allRepos: GithubRepo[] = [];
        let page = 1;
        let hasMorePages = true;
        
        // Handle pagination for users with many repos
        while (hasMorePages) {
          const apiUrl = `https://api.github.com/users/${username}/repos?page=${page}&per_page=100`;
          const response = await fetch(apiUrl);
          
          if (!response.ok) {
            if (response.status === 403) {
              throw new Error('GitHub API rate limit exceeded. Please try again later.');
            } else if (response.status === 404) {
              throw new Error(`GitHub user "${username}" not found.`);
            } else {
              throw new Error(`GitHub API request failed with status ${response.status}`);
            }
          }
          
          const pageRepos: GithubRepo[] = await response.json();
          allRepos = [...allRepos, ...pageRepos];
          
          // Check if we've received less than the maximum per page
          hasMorePages = pageRepos.length === 100;
          page++;
        }
        
        const publicReposCount = allRepos.filter(repo => !repo.private).length;
        
        // Cache the result
        localStorage.setItem(cacheKey, JSON.stringify({
          count: publicReposCount,
          timestamp: Date.now()
        }));
        
        setRepoCount(publicReposCount);
      } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch repo count');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username, cacheDurationMs, cacheKey]);

  if (isLoading) return <>{loadingComponent}</>;
  if (error) return <>{typeof errorComponent === 'function' ? errorComponent(error) : errorComponent}</>;
  if (repoCount === null) return null;

  return <span className={className}>{repoCount}</span>;
};

export default GithubRepoCount;
