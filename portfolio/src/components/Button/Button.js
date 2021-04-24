import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="cv_download">
      <a href="">
        <span>{props.text}</span>
      </a>
    </div>
  );
};

export default Button;
