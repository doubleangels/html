import React, { useEffect, useState, useRef, useMemo } from 'react';

const GithubRepoCount: React.FC = () => {
  const [apiData, setApiData] = useState([]);
  const repoCountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/doubleangels/repos';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setApiData(data);
        } else {
          throw new Error('Failed to fetch data from GitHub API');
        }
      } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
      }
    };

    fetchData();
  }, []);

  const repoCount = useMemo(() => {
    return apiData.filter((repo: any) => !repo.private).length;
  }, [apiData]);

  useEffect(() => {
    if (repoCountRef.current !== null) {
      repoCountRef.current.textContent = `${repoCount}`;
    }
  }, [repoCount]);

  return <div id="repocount" ref={repoCountRef}></div>;
};

export default GithubRepoCount;