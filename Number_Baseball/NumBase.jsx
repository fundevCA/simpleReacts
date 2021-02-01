import React, { Component } from "react";
import Try from "./Try";

const getNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const selected = [];
  for (let i = 0; i < 4; i++) {
    const random = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    selected.push(random);
  }
  return selected;
};

class NumBase extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: []
  };
  onSubmitForm = e => {
    const { value, answer, tries, result } = this.state;
    e.preventDefault();

    if (value === answer.join("")) {
      this.setState({
        result: "HOMERUN!",
        value: "",
        answer: getNumbers(),
        tries: [...tries, { try: value, result: "HOMERUN!" }]
      });
      alert("Congratulation! Let's try another game");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: []
      });
    } else {
      let strike = 0;
      let ball = 0;
      const answerArray = value.split("").map(v => parseInt(v));

      if (tries.length < 9) {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) ball += 1;
        }

        this.setState({
          tries: [
            ...tries,
            { try: value, result: `${ball} Ball ${strike} Strike` }
          ],
          value: ""
        });
      } else {
        this.setState({
          result:
            "Failed to guess within 10 Attempts! The answer was " +
            answer.join(",")
        });
        alert("It was close... Let's try another game");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: []
        });
      }
    }
  };
  onChangeInput = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { value, tries } = this.state;
    return (
      <>
        <h1>Number Baseball</h1>
        <h4>Guess 4 numbers within 10 Attempts</h4>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={value} onChange={this.onChangeInput} />
          <button>Submit</button>
        </form>
        <br />
        <div>Attempts: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return <Try key={`${i} tries`} tryInfo={v} />;
          })}
        </ul>
      </>
    );
  }
}

// module.exports = NumBase;
export default NumBase;
