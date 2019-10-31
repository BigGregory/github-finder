import React from 'react';

const UserItem = props => {
  const { login, avatar_url, html_url } = props.user;
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

export default UserItem;
