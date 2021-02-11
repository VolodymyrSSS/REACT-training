import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

function UserInfo(props) {
  return (
    <div className="UserInfo-name">
      {props.user.name}
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <hr />
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <UserInfo user={props.author} />
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

export default Comment;