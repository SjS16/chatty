import React, { Component } from 'react';

class Chatbar extends Component {
  onEnterMessage = (e) => {
    let chatMessage = e.target.value;
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(chatMessage);
      this.props.onEnterMessage(chatMessage);
      e.target.value = '';
    }
  }
  
  onEnterName = (e) => {
    let newUserName = e.target.value;
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(newUserName)
      this.props.onEnterName(newUserName);
      e.target.value = newUserName;
    }
  }

  render() {
    console.log('Rendering <ChatBar/>');
    return (
      <footer className="chatbar">
        <input className="chatbar-username" 
          placeholder="Your Name (Optional)" 
          defaultValue={this.props.name} 
          onKeyPress={this.onEnterName}
        />
        <input
          className="chatbar-message"
          name="chatMessage"
          placeholder="Type a message and hit ENTER"
          onKeyPress={this.onEnterMessage}
        />
      </footer>
    );
  }
}
export default Chatbar;