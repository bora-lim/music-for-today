import React from "react";
import "./weather.scss";

const Weather = (props) => {
  const getInfo = () => {
    console.log("click!");

    const url =
      "https://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst"; /*URL*/
    let queryParams =
      "?" +
      encodeURIComponent("ServiceKey") +
      "=" +
      process.env.REACT_APP_API_KEY; /*Service Key*/
    queryParams +=
      "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("numOfRows") +
      "=" +
      encodeURIComponent("10"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("dataType") +
      "=" +
      encodeURIComponent("XML"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("base_date") +
      "=" +
      encodeURIComponent("20210507"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("base_time") +
      "=" +
      encodeURIComponent("1500"); /**/
    queryParams +=
      "&" + encodeURIComponent("nx") + "=" + encodeURIComponent("18"); /**/
    queryParams +=
      "&" + encodeURIComponent("ny") + "=" + encodeURIComponent("1"); /**/

    fetch(`${url}${queryParams}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      });
  };

  return <button onClick={getInfo}>click</button>;
};

export default Weather;
