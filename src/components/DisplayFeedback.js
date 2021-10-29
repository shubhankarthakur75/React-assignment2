import React, { Component } from "react";
import "./DisplayFeedback.css";
import Feedback from "./Feedback";

class DisplayFeedback extends Component {
  render() {
    return (
      <>
        <div className="feedbacks-container">
          {this.props.nameArray.map((item, index) => {
            return (
              <Feedback
                name={this.props.nameArray[index]}
                key={index}
                department={this.props.departmentArray[index]}
                rating={this.props.ratingArray[index]}
              />
            );
          })}

          {/* <Feedback
          name={this.props.name}
          department={this.props.department}
          rating={this.props.rating}
        /> */}
        </div>
      </>
    );
  }
}

export default DisplayFeedback;
