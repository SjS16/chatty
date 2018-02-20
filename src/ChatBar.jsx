import React, { Component } from 'react';

class Chatbar extends Component {
  onKeyPress = (e) => {
    let chatMessage = e.target.value;
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(chatMessage);
      this.props.onEnter(chatMessage);
      e.target.value = '';
    }
  }
  render() {
    console.log('Rendering <ChatBar/>');
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.name} />
        <input className="chatbar-message" name="chatMessage" placeholder="Type a message and hit ENTER" onKeyPress={this.onKeyPress}/>
      </footer>
    );
  }
}
export default Chatbar;