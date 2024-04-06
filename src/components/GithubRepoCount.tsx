import React, { useEffect, useState, useRef, useMemo } from 'react';

const GithubRepoCount: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const repoCountRef = useRef<HTMLDivElement | null>(null);

  const apiUrl = useMemo(() => 'https://api.github.com/users/doubleangels/repos', []);

  useEffect(() => {
    const fetchData = async () => {
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
      }
    };

    fetchData();
  }, [apiUrl]);

  return <div id="repocount" ref={repoCountRef}>{repoCount !== null && repoCount}</div>;
};

export default GithubRepoCount;