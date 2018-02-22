import React, { Component } from 'react';


class NavBar extends Component {
  render() {
    let message = "";
    let count = this.props.count;
    if (count < 2) {
      message = 'You are the only user online'
    } if (count == 2) {
      message = 'There is ' + (count-1) + ' other user online!'
    } if (count > 2) {
      message = 'There are ' + (count - 1) + ' other users online!'
    }
    console.log('Rendering <NavBar/>');
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand"><i className="fa fa-comments"></i>  Chatter</a>
        <div className="navbar-count">{message}</div>
      </nav>);
  }
}
export default NavBar;