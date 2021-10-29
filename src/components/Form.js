import React, { Component } from "react";
import "./Form.css";
import DisplayFeedback from "./DisplayFeedback";

class Form extends Component {
  // state = {
  //   name: null,
  //   department: null,
  //   rating: null,
  // };

  // displayFeedback = () => {
  //   let empName = document.getElementById("emp-name").value;
  //   let empDepartment = document.getElementById("emp-department").value;
  //   let empRating = document.getElementById("emp-Rating").value;
  //   this.setState({
  //     name: empName,
  //     department: empDepartment,
  //     rating: empRating,
  //   });
  // };

  state = {
    id: null,
    name: [],
    department: [],
    rating: [],
  };

  displayFeedback = () => {
    let d = new Date();
    let empName = document.getElementById("emp-name").value;
    let empDepartment = document.getElementById("emp-department").value;
    let empRating = document.getElementById("emp-Rating").value;
    this.setState({ id: d.getTime() });
    this.state.name.push(empName);
    this.state.department.push(empDepartment);
    this.state.rating.push(empRating);
    document.getElementById("emp-name").value = "";
    document.getElementById("emp-department").value = "";
    document.getElementById("emp-Rating").value = "";
  };

  render() {
    return (
      <div className="form-container">
        <form action="#" className="feedback-form">
          <div>
            <label htmlFor="emp-name">Name</label>
            <input type="text" id="emp-name" required></input>
          </div>
          <div>
            <label htmlFor="emp-department">Department</label>
            <input type="text" id="emp-department" required></input>
          </div>
          <div>
            <label htmlFor="emp-Rating">Rating</label>
            <input type="text" id="emp-Rating" required></input>
          </div>
          <div>
            <button onSubmit={() => this.displayFeedback()}>Submit</button>
          </div>
          <div>
            <hr />
          </div>
        </form>

        {this.state.name.length !== 0 ? (
          <DisplayFeedback
            nameArray={this.state.name}
            departmentArray={this.state.department}
            ratingArray={this.state.rating}
          />
        ) : null}

        {/* {if(this.state.name.length!=0){    //Doubt
             <DisplayFeedback
              nameArray={this.state.name}
            departmentArray={this.state.department}
            ratingArray={this.state.rating}
           />
        }}; */}
      </div>
    );
  }
}

export default Form;
