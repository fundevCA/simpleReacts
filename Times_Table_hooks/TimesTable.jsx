const React = require("react");
const { useState, useRef } = React;

const Times = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  // These has to be in functional component
  // Each set- is their own setState
  const inputRef = useRef(null);
  // This is how to use Ref

  const onChangeInput = e => {
    setValue(e.target.value);
  };
  const onSubmitForm = e => {
    e.preventDefault();

    if (parseInt(value) === first * second) {
      // setValue(first*second);
      setResult("Correct: " + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("Wrong: " + value);
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        {first} Times {second}?
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>Submit</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = Times;
