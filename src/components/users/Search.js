import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = event => {
    this.props.searchUsers(this.state.text);
    event.preventDefault();
    this.setState({ text: '' });
  };
  render() {
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
      </div>
    );
  }
}

export default Search;
