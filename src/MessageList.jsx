import React, { Component } from 'react';
import MessageUser from './MessageUser.jsx';
import MessageSystem from './MessageSystem.jsx';

class MessageList extends Component {
  render() {
    console.log('Rendering <MessageList/>');
    return (
      <main className="messages">
        <MessageUser />
        <MessageSystem />
      </main>);
  }
}
export default MessageList;