import React from "react";
import "./weather.scss";

const Weather = (props) => {
  const getInfo = () => {
    console.log("click!");

    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `/1360000/VilageFcstInfoService/getUltraSrtNcst?ServiceKey=${apiKey}&dataType=JSON&base_date=20210507&base_time=0500&nx=60&ny=120`;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <button onClick={getInfo}>click</button>;
};

export default Weather;
