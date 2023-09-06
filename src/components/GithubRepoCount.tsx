import React, { useEffect, useState, useRef } from 'react';

const GithubRepoCount: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const repoCountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/doubleangels/repos';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const publicRepos = data.filter((repo: any) => !repo.private);
        setRepoCount(publicRepos.length);
      })
      .catch(error => {
        console.error('Error fetching data from GitHub API:', error);
      });
  }, []);

  useEffect(() => {
    if (repoCountRef.current !== null) {
        repoCountRef.current.textContent = `${repoCount}`;
    }
  }, [repoCount]);

  return <div id="repocount" ref={repoCountRef}></div>;
};

export default GithubRepoCount;