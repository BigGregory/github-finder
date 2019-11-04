import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    if (this.state.text) {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    } else {
      this.props.setAlert('Please enter something', 'light');
    }
  };
  render() {
    const { clearUsers, showClear } = this.props;
    const clearButton = (
      <button className="btn btn-light btn-block" onClick={clearUsers}>
        Clear
      </button>
    );
    return (
      <div>
        <form className="form" onSubmit={this.onSubmitHandler}>
          <input
            onChange={this.onInputChange}
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
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
  }
}

export default Search;
