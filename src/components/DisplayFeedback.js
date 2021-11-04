import React, { Component } from "react";
import "./DisplayFeedback.css";
import Feedback from "./Feedback";

class DisplayFeedback extends Component {
  render() {
    return (
      <>
        <div className="feedbacks-container">
          {this.props.propsEmployeeArray.map((item, index) => {
            return (
              <Feedback
                key={item.id}
                name={item.name}
                department={item.department}
                rating={item.rating}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default DisplayFeedback;
