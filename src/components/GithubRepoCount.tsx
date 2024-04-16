import React, { useEffect, useState } from 'react';

const GithubRepoCount: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = 'https://api.github.com/users/doubleangels/repos';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          const publicReposCount = data.filter((repo: any) => !repo.private).length;
          setRepoCount(publicReposCount);
        } else {
          throw new Error('GitHub API request failed');
        }
      } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
        setError('Failed to fetch repo count. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return 'Loading...';
  if (error) return <p>{error}</p>;

  return repoCount;
};

export default GithubRepoCount;
