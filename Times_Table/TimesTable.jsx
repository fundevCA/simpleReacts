const React = require("react");
const { Component } = React;

/*
class TimesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: Math.ceil(Math.random() * 9),
      secondNum: Math.ceil(Math.random() * 9),
      value: "",
      result: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();

    if (
      parseInt(this.state.value) ===
      this.state.firstNum * this.state.secondNum
    ) {
      this.setState(prev => {
        return {
          result: "Correct: " + prev.value,
          firstNum: Math.ceil(Math.random() * 9),
          secondNum: Math.ceil(Math.random() * 9),
          value: ""
        };
      });
    } else {
      this.setState(prev => {
        return {
          result: "Wrong: " + this.state.value,
          value: ""
        };
      });
    }
    this.input.focus();
  };
  onChange = e => this.setState({ value: e.target.value });

  input;
  // We need to put functions in outside since setState will execute render again
  // which will lead to create functions every time when rendered if we do not put that outside

  onRef = e => {
    this.input = e;
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.firstNum} times {this.state.secondNum} ?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name=""
            id=""
            value={this.state.value}
            onChange={this.onChange}
            ref={this.onRef}
          />

          <button>Submit</button>
        </form>

        <div>{this.state.result}</div>
      </React.Fragment>
    );
    // this.setState will execute render everytime -> 최적화 고려해야한다
    // onClick = {this.onSubmit} to button is possible too
  }
} 
 */
class TimesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
      result: ""
    };
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  submitOnClick = e => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState(prev => {
        return {
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: "",
          result: prev.value + " is Correct"
        };
      });
    } else {
      this.setState(prev => {
        return {
          value: "",
          result: prev.value + " is Wrong"
        };
      });
    }
  };

  onRef = e => {
    this.input = e;
  };
  input;

  render() {
    return (
      <div>
        <div>Times Table</div>
        <div>
          {this.state.first} Times {this.state.second}?
        </div>
        <form onSubmit={this.submitOnClick}>
          <input
            type="text"
            onChange={this.onChange}
            ref={this.onRef}
            value={this.state.value}
          />
          <button>Submit</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}
module.exports = TimesTable;
