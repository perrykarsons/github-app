import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

const Search = () => {
  const [repoSearch, setRepoSearch] = useState("");
  const [repos, setRepos] = useState([]);
  const changeHandler = (e) => {
    setRepoSearch(e.target.value);
  };
  const clickHandler = async () => {
    const result = await axios(
      `https://api.github.com/users/${repoSearch}/repos`
    );

    try {
    } catch (err) {
      console.log(err);
    }
    setRepos(result);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={repoSearch}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Search</button>

      <Results repos={repos} />
    </div>
  );
};

export default Search;
