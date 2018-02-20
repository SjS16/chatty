import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Chatbar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "Bob" }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          type: 'user',
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          type: "user",
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        },
        {
          id: 3,
          type: "system",
          content: "Anonymous1 changed their name to nomnom."
        }
      ]};
  }
  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = { id: 4, type: "user", username: "Michelle", content: "Hello there!" };
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages })
    }, 3000);
  }
  onEnter = (e) => {
    e.preventDefault;
    const newMessage = { id: Math.random(), type: "user", username: this.state.currentUser.name, content: e};
    const messages = this.state.messages.concat(newMessage)
    this.setState({ messages: messages })
  }
  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
        <Chatbar name={this.state.currentUser.name} onEnter={this.onEnter}/>
      </div>
    );
  }
}
export default App;
