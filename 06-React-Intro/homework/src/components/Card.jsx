import React from "react";

export default function Card(props) {
  //con props
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h3>{props.name}</h3>
      <div>
        <p>MIN</p>
        <p>{props.min}</p>
      </div>
      <div>
        <p>MAX</p>
        <p>{props.max}</p>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="img not found"
      />
    </div>
  );
}
