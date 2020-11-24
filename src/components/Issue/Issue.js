import React from "react";
import { Link } from "react-router-dom";

import "./Issue.css";

const Issue = ({ name, id }) => (
  <Link to={`/${id}`} className="issue">
    {name}
  </Link>
);

export default Issue;
