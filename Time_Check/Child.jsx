import React, { PureComponent } from "react";

class Child extends PureComponent {
  state = {
    result: this.props.result
  };

  render() {
    const { result } = this.props;
    return <div>{result} this is your child</div>;
  }
}

export default Child;
