import React from 'react';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h2>Hi, there!</h2>
      {/* embed expressions in JSX by wrapping them in curly braces */}
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

export default Mailbox;