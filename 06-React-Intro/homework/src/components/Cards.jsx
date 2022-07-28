import React from "react";
import Card from "./Card";

export default function Cards(props) {
  /*   if (!props.cities) {
    return <h1>No cities</h1>;
  } */
  //con destructuring
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {
        // props.cities && props.cities.map((city) =>
        // props.cities?.map(city =>
        props.cities ? (
          props.cities.map((city) => (
            <Card
              key={city.id}
              max={city.main.temp_max}
              min={city.main.temp_min}
              name={city.name}
              img={city.weather[0].icon}
              onClose={() => alert(city.name)}
            />
          ))
        ) : (
          <h1>No cities</h1>
        )
      }
    </div>
  );
}
