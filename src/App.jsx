import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Chatbar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <NavBar />
        <MessageList />
        <Chatbar />
      </div>
    );
  }
}
export default App;
