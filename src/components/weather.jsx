import React from "react";
import "./weather.scss";

const Weather = (props) => {
  const getInfo = () => {
    console.log("click!");

    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastGrib?ServiceKey=${apiKey}&nx=60&ny=127&base_date=20210506&base_time=2100&_type=json`;

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
