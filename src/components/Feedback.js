import React, { Component } from "react";
import "./Feedback.css";

class Feedback extends Component {
  render() {
    return (
      <div className="feedback-box">
        Name:{this.props.name} | Department:{this.props.department} |Rating:
        {this.props.rating}
      </div>
    );
  }
}

export default Feedback;
