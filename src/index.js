import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';


//Getting Started with React Redux
class DisplayMessages extends React.Component {
  // change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    }
  }
  // change code above this line
  render() {
    return <div />
  }
};

//Manage State Locally First
class DisplayMessages2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  submitMessage() {
    let newMessages = [...this.state.messages, this.state.input]
    this.setState({
     messages: newMessages,
     input: ''
    })
  }

  render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
          <input onChange={this.handleChange} value={this.state.input}/>
          <button onClick={this.submitMessage}>submit</button>
          <ul>
            {this.state.messages.map(msg => <li>{msg}</li>)}
          </ul>
          { /* change code above this line */ }
        </div>
      );
    }
};
ReactDOM.render(<DisplayMessages2 />, document.getElementById('root'))
