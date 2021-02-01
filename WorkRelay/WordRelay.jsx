// Change Class to Hooks

const React = require("react");
// const { Component} = React;
const { useState, useRef } = React;

// class WordRelay extends Component
const WordRelay = () => {
  const [word, setWord] = useState("블레이크");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  //   state = {
  //     word: "블레이크",
  //     value: "",
  //     result: ""
  //   };

  // onSubmit to const onSubmit

  const onSubmit = e => {
    e.preventDefault();

    if (word.slice(-1) === value.slice(0, 1)) {
      setResult("Correct!");
      setWord(value);
      setValue("");
    } else {
      //   this.setState({
      //     result: "Wrong!",
      //     value: ""
      //   });
      setResult("Wrong!");
      setValue("");
    }
    inputRef.current.focus();
  };
  const onChange = e => {
    // this.setState({ value: e.target.value });
    setValue(e.target.value);
  };
  //   input;
  //   onRefInput = c => {
  //     this.input = c;
  //   };

  //   render(){return}  to return
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="wordInput">
          Enter Your Word
          <br />
        </label>
        <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
