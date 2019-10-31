import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="Avatar" className="round-img img-small" />
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          rel="noopener noreferrer"
          className="btn btn-dark btn-sm my-1"
          target="_blank">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
