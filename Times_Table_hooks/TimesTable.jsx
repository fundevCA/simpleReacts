const React = require("react");

const Times = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = React.useState("");
  const [value, setValue] = React.useState("");
  // These has to be in functional component
  // Each set- is their own setState
  const inputRef = React.useRef(null);
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
    <React.Fragment>
      <div>
        {first} Times {second}?
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>Submit</button>
      </form>
      <div>{result}</div>
    </React.Fragment>
  );
};

module.exports = Times;
