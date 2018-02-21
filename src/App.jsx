import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Chatbar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "Bob" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      count: "",
    };
  }
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');
    this.socket.addEventListener('open', (e) => {
      console.log("Connected to Server");
    });
    this.socket.onmessage = (event) => {
      let incomingMessage = JSON.parse(event.data);
      if (!incomingMessage.type) {
        this.setState({count: incomingMessage})
      } else {
      this.setState({ messages: this.state.messages.concat(incomingMessage) })
      } 
    }
    console.log("componentDidMount <App />");
  }

  onEnterMessage = (e) => {
    e.preventDefault;
    const newMessage = { color: undefined, id: undefined, type: "user", username: this.state.currentUser.name, content: e};
    const messages = this.state.messages.concat(newMessage)
    this.socket.send(JSON.stringify(newMessage));
  }
  onEnterName = (e) => {
    e.preventDefault;
    const newUser = e;
    const contentMessage = this.state.currentUser.name + " has changed their name to " + newUser;
    const newUserUpdate = {type: "system", content: contentMessage};
    this.state.currentUser.name = newUser;
    this.socket.send(JSON.stringify(newUserUpdate));
  }
  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <NavBar count={this.state.count}/>
        <MessageList messages={this.state.messages} />
        <Chatbar name={this.state.currentUser.name} onEnterName={this.onEnterName} onEnterMessage={this.onEnterMessage}/>
      </div>
    );
  }
}
export default App;
