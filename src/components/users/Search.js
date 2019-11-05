import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showAlert, clearUsers, showClear }) => {
  const [text, setText] = useState('');

  const onInputChange = event => {
    setText(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    if (text) {
      searchUsers(text);
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

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default Search;
