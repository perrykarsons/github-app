import React from "react";

const Result = (props) => {
  const { repos } = props;

  const repoList =
    repos.length !== 0  ? (
      repos.data.map((item) => (
        <li key={item.id}>
          <a href={item.html_url} target="_blank" rel="noreferrer">
            {item.name}
          </a>
          <br />
          forks: {item.forks_count}
          <br />
          watchers: {item.watchers_count}
          <br />
          language: {item.language}
          <br />
          <br />
        </li>
      ))
    ) : (
      <li>No repos found for this user</li>
    );

  return repoList;
};

export default Result;
