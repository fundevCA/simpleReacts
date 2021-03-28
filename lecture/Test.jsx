import React, { PureComponent } from "react";
import Child from "./Child";

class Test extends PureComponent {
  state = {
    text: "Hello, Webpack"
  };
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;
  // }

  onClick = () => {
    this.setState({});
  };

  render() {
    return (
      <>
        <button onClick={this.onClick}>HERE</button>
        <Child result={this.state.text} />
      </>
    );
  }
}

export default Test;
