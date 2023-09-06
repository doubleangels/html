import React, { useEffect, useState, useRef } from 'react';

const GithubRepoCount: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const repoCountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Define the GitHub API URL for the user's repositories
    const apiUrl = 'https://api.github.com/users/doubleangels/repos';

    // Fetch the user's repositories from the GitHub API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Calculate the number of public repositories
        const publicRepos = data.filter((repo: any) => !repo.private);
        setRepoCount(publicRepos.length);
      })
      .catch(error => {
        console.error('Error fetching data from GitHub API:', error);
      });
  }, []);

  useEffect(() => {
    // Update the <div> with the id "repocount" in the DOM
    if (repoCountRef.current !== null) {
        repoCountRef.current.textContent = `${repoCount}`;
    }
  }, [repoCount]);

  return <div id="repocount" ref={repoCountRef}></div>;
};

export default GithubRepoCount;