import React, { Component } from "react";
import "./Form.css";
import DisplayFeedback from "./DisplayFeedback";

class Form extends Component {
  state = {
    employeeArray: [],
    id: "",
    name: "",
    department: "",
    rating: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let d = new Date();
    const tempObj = {
      id: d.getTime(),
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };

    const tempEmployeeArray = [...this.state.employeeArray];
    tempEmployeeArray.push(tempObj);
    this.setState({ employeeArray: tempEmployeeArray }, () =>
      console.log(this.state)
    );

    this.state.id = "";
    this.state.name = "";
    this.state.department = "";
    this.state.rating = "";
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <div className="form-container">
        <form className="feedback-form" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="emp-name">Name</label>
            <input
              type="text"
              id="name"
              value={this.state.name} /////////Doubt
              onChange={(e) => this.handleChange(e)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="emp-department">Department</label>
            <input
              type="text"
              id="department"
              value={this.state.department}
              onChange={(e) => this.handleChange(e)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="emp-Rating">Rating</label>
            <input
              type="text"
              id="rating"
              value={this.state.rating} /////////Doubt
              onChange={(e) => this.handleChange(e)}
              required
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div>
            <hr />
          </div>
        </form>

        {this.state.employeeArray.length !== 0 ? (
          <DisplayFeedback propsEmployeeArray={this.state.employeeArray} />
        ) : null}
      </div>
    );
  }
}

export default Form;
