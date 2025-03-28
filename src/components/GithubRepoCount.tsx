/**
 * GithubRepoCount Component
 * 
 * This component fetches and displays the total number of public repositories for a GitHub user.
 * It handles pagination for users with more than 100 repositories, implements client-side caching
 * to reduce API calls, and provides customizable loading and error states.
 */
import React, { useEffect, useState, useMemo } from 'react';

/**
 * Interface representing a GitHub repository object from the API.
 * This contains a subset of the properties returned by GitHub's API.
 */
interface GithubRepo {
  id: number;              // Unique identifier for the repository
  name: string;            // Name of the repository
  private: boolean;        // Whether the repository is private or public
  html_url: string;        // URL to the repository on GitHub
  description: string | null; // Description of the repository, may be null
}

/**
 * Props for the GithubRepoCount component.
 */
interface GithubRepoCountProps {
  username?: string;       // GitHub username to fetch repositories for
  className?: string;      // Optional CSS class for styling the count element
  cacheDurationMs?: number; // Duration in milliseconds for which to cache the repo count
  loadingComponent?: React.ReactNode; // Custom component to show while loading
  errorComponent?: React.ReactNode | ((errorMsg: string) => React.ReactNode); // Custom component to show on error
}

/**
 * Component that displays the count of public GitHub repositories for a user.
 * 
 * @param {Object} props - Component props
 * @param {string} props.username - GitHub username to fetch repos for (default: 'doubleangels')
 * @param {string} props.className - CSS class to apply to the count span (default: '')
 * @param {number} props.cacheDurationMs - How long to cache the count in milliseconds (default: 1 hour)
 * @param {React.ReactNode} props.loadingComponent - Component to show while loading (default: "Loading..." text)
 * @param {React.ReactNode | Function} props.errorComponent - Component or function to show on error
 */
const GithubRepoCount: React.FC<GithubRepoCountProps> = ({
  username = 'doubleangels', // Default username if none provided
  className = '',           // Default empty class
  cacheDurationMs = 3600000, // Default cache duration: 1 hour in milliseconds
  loadingComponent = <span>Loading...</span>, // Default loading indicator
  errorComponent = (errorMsg: string) => <span className="error">{errorMsg}</span>, // Default error display
}) => {
  // State to store the repository count once fetched
  const [repoCount, setRepoCount] = useState<number | null>(null);
  
  // State to track loading status
  const [isLoading, setIsLoading] = useState(false);
  
  // State to store error messages, if any
  const [error, setError] = useState<string | null>(null);

  /**
   * Generate a unique cache key based on the username.
   * Using useMemo to avoid recreating this string on every render.
   */
  const cacheKey = useMemo(() => `github-repos-${username}`, [username]);

  useEffect(() => {
    /**
     * Asynchronous function to fetch repository data from GitHub API.
     * This handles caching, pagination, and error handling.
     */
    const fetchData = async () => {
      // Check if we have cached data first
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        const { count, timestamp } = JSON.parse(cachedData);
        // If cached data is still valid, use it and skip API call
        if (Date.now() - timestamp < cacheDurationMs) {
          setRepoCount(count);
          return;
        }
        // Otherwise, cached data has expired and we'll fetch fresh data
      }

      // Set loading state while we fetch data
      setIsLoading(true);
      setError(null);

      try {
        // Array to collect all repositories across paginated results
        let allRepos: GithubRepo[] = [];
        let page = 1;
        let hasMorePages = true;
        
        // Continue fetching pages until we've retrieved all repositories
        // GitHub API paginates results, with max 100 items per page
        while (hasMorePages) {
          const apiUrl = `https://api.github.com/users/${username}/repos?page=${page}&per_page=100`;
          const response = await fetch(apiUrl);
          
          // Handle various error responses
          if (!response.ok) {
            if (response.status === 403) {
              throw new Error('GitHub API rate limit exceeded. Please try again later.');
            } else if (response.status === 404) {
              throw new Error(`GitHub user "${username}" not found.`);
            } else {
              throw new Error(`GitHub API request failed with status ${response.status}`);
            }
          }
          
          // Parse the JSON response
          const pageRepos: GithubRepo[] = await response.json();
          allRepos = [...allRepos, ...pageRepos];
          
          // Check if there might be more pages (GitHub returns exactly 100 items if there are more)
          hasMorePages = pageRepos.length === 100;
          page++;
        }
        
        // Count only public repositories
        const publicReposCount = allRepos.filter(repo => !repo.private).length;
        
        // Cache the count along with a timestamp
        localStorage.setItem(cacheKey, JSON.stringify({
          count: publicReposCount,
          timestamp: Date.now()
        }));
        
        // Update state with the count
        setRepoCount(publicReposCount);
      } catch (error) {
        // Log the error for debugging
        console.error('Error fetching data from GitHub API:', error);
        // Update error state for user feedback
        setError(error instanceof Error ? error.message : 'Failed to fetch repo count');
      } finally {
        // Always turn off loading state when done, whether successful or not
        setIsLoading(false);
      }
    };

    // Execute the fetch function when the component mounts or when dependencies change
    fetchData();
  }, [username, cacheDurationMs, cacheKey]); // Re-run if these dependencies change

  // Conditional rendering based on component state
  if (isLoading) return <>{loadingComponent}</>; // Show loading component while fetching
  if (error) return <>{typeof errorComponent === 'function' ? errorComponent(error) : errorComponent}</>; // Show error component if there's an error
  if (repoCount === null) return null; // Don't render anything if we don't have data yet

  // Render the repository count with the provided className
  return <span className={className}>{repoCount}</span>;
};

export default GithubRepoCount;
