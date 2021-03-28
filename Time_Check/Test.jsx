import React, { PureComponent } from "react";
import Child from "./Child";

class Test extends PureComponent {
  state = {
    message: "Click when you ready",
    status: "waiting",
    result: []
  };

  onClickScreen = () => {
    const { status, result, message } = this.state;

    if (status == "waiting") {
      this.setState({
        message: "Get Ready",
        status: "ready"
      });
      setTimeout(() => {
        this.setState({
          message: "Click Now",
          status: "click"
        });
      });
    }
  };
  //waiting: blue, ready: yellow, well: green, fast: red

  render() {
    return (
      <>
        <div
          id="screen"
          className={this.state.status}
          onClick={this.onClickScreen}
        >
          message
        </div>
        <div>Average ms</div>
      </>
    );
  }
}

export default Test;
