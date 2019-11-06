import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { clearUsers, users } = githubContext;
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;
  const showClear = users.length > 0;
  const [text, setText] = useState('');

  const onInputChange = event => {
    setText(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    if (text) {
      githubContext.searchUsers(text);
      setText('');
    } else {
      showAlert('Please enter something', 'light');
    }
  };

  const clearButton = (
    <button className="btn btn-light btn-block" onClick={clearUsers}>
      Clear
    </button>
  );
  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          onChange={onInputChange}
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && clearButton}
    </div>
  );
};

export default Search;
