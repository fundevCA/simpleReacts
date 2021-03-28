import React, { Component } from "react";

// props 전달하고 props.tryInfo 해도된다.
const Try = ({ tryInfo }) => {
  return (
    <li>
      {tryInfo.try} {tryInfo.result}
    </li>
  );
};

export default Try;
