import React from "react";

const SquareComponent = (props) => {
  const classes = props.className ? `${props.className} square` : "square";
  return (
    <span
      style={props.state === "X" ? { color: "white" } : { color: "#333" }}
      className={classes}
      onClick={props.onClick}
    >
      {props.state}
    </span>
  );
};

export default SquareComponent;
