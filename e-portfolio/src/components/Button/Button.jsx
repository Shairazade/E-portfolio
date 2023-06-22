import React from "react";
import { Link } from "react-router-dom";

function Button({ text, to }) {
  return (
    <Link to={to} className="button">
      {text}
    </Link>
  );
}

export default Button;


