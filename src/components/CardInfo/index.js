import React from "react";

import "./styles.scss";

export default function CardInfo({ name, value, id }) {
  return (
    <div className="wrapper-card-info">
      <div className="wrapper-value">
        <label id={id}>{value}</label>
      </div>
      <div className="wrapper-name">
        <label>{name}</label>
      </div>
    </div>
  );
}
