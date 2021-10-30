import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>

        <h1>Employee Feedback Form</h1>
        <div className="form-container">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
