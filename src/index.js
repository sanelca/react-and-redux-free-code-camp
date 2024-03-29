import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
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


//Extract State Logic to Redux
const ADD = 'ADD';

function addMessage(message) {
  return {
    type: ADD,
    message: message
  };
};

function messageReducer (previousState, action) {
  return [...previousState, action.message];
}

let store = {
  state: [],
  getState: () => store.state,
  dispatch: (action) => {
    if (action.type === ADD) {
      store.state = messageReducer(store.state, action);
    }
  }
};


//Use Provider to Connect Redux to React
const ADD2 = 'ADD';

const addMessage2 = (message) => {
  return {
    type: ADD2,
    message
  }
};

const messageReducer2 = (state = [], action) => {
  switch (action.type) {
    case ADD2:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store2 = createStore(messageReducer2);

// React Code:

class DisplayMessages3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

class AppWrapper extends React.Component {
  // render the Provider here
  render() {
    return (
      <Provider store = {store2}>
        <DisplayMessages3 />
      </Provider>
    )
  }
  // change code above this line
};


//Map State to Props
const state = [];

// change code below this line
const mapStateToProps = (state) => {
  return {
    messages: state
  }
}


//Map Dispatch to Props
const addMessage3 = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
        dispatch(addMessage(message));
    }
  }
};


//Connect Redux to React
const addMessage4 = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps2 = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps2 = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

// change code below this line
const ConnectedComponent = connect(mapStateToProps2, mapDispatchToProps2)(Presentational)




//Connect Redux to the Messages App
// Redux:
const ADD5 = 'ADD';

const addMessage5 = (message) => {
  return {
    type: ADD5,
    message: message
  }
};

const messageReducer5 = (state = [], action) => {
  switch (action.type) {
    case ADD5:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store5 = createStore(messageReducer5);

// React:
class Presentational2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps5 = (state) => {
  return { messages: state }
};

const mapDispatchToProps5 = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};


// define the Container component here:
const Container = connect(mapStateToProps5, mapDispatchToProps5)(Presentational2);

class AppWrapper5 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // complete the return statement:
    return (
      <Provider store={store5}>
       <Container/>
      </Provider>
      );
  }
};


//Extract Local State into Redux
// Redux:
const ADD6 = 'ADD';

const addMessage6 = (message) => {
  return {
    type: ADD6,
    message: message
  }
};

const messageReducer6 = (state = [], action) => {
  switch (action.type) {
    case ADD6:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store6 = createStore(messageReducer6);

// React:

// Change code below this line
class Presentational3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
      this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });

  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps6 = (state) => {
  return {messages: state}
};

const mapDispatchToProps6 = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container6 = connect(mapStateToProps6, mapDispatchToProps6)(Presentational3);

class AppWrapper6 extends React.Component {
  render() {
    return (
      <Provider store={store6}>
        <Container6/>
      </Provider>
    );
  }
};

ReactDOM.render(<AppWrapper6 />, document.getElementById('root'))
