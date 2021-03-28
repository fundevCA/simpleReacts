import React, { useRef, useState } from "react";
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

const NumBase = () => {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const inputRef = useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();

    if (value === answer.join("")) {
      setValue("");
      setTries(...tries, { try: value, result: "HOMERUN!" });

      alert("Congratulation! Let's try another game");

      setAnswer(getNumbers());
      setTries([]);
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
        setTries(prev => {
          return [
            ...tries,
            { try: value, result: `${ball} Ball ${strike} Strike` }
          ];
        });
        setValue("");
      } else {
        setTries(prev => {
          return [
            ...tries,
            {
              try: value,
              result: `"Failed to guess within 10 Attempts! The answer was " +
            ${answer.join(",")}`
            }
          ];
        });

        alert("It was close... Let's try another game");

        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      }
    }
    inputRef.current.focus();
  };
  const onChangeInput = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <h1>Number Baseball</h1>
      <h4>Guess 4 numbers within 10 Attempts</h4>
      <form onSubmit={onSubmitForm}>
        <input
          maxLength={4}
          value={value}
          onChange={onChangeInput}
          ref={inputRef}
        />
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
};
export default NumBase;
