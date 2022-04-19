import useFetch from "./UseFetch";
import React from "react";
// 17919654dd5285cd380229ac9cf63251

//  https://api.openweathermap.org/data/2.5/forecast?q=Tampa&appid=17919654dd5285cd380229ac9cf63251&units=imperial#

function Thursday() {
  console.log("ran through");
  const { data, loading, error, refetch } = useFetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=40.6526006&lon=-73.9497211&exclude=current,minutely,hourly,alerts&appid=17919654dd5285cd380229ac9cf63251&units=imperial#"
  );
  if (loading) return <h1> LOADING...</h1>;
  if (error) console.log(error);

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    const weekdays = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    var dayFinder = a.getDay();
    var day = weekdays[dayFinder];

    var time = day.toUpperCase() + " " + month + " " + date;
    return time;
  }

  return (
    <div>
      <div className="card">
        <h1>
          <br />
          <span className="date">
            {data ? timeConverter(data.daily[3].dt) : null}
          </span>
          <br />
          <img
            src={
              data
                ? "http://openweathermap.org/img/wn/" +
                  data.daily[3].weather[0].icon +
                  "@2x.png"
                : null
            }
            alt="icon pic"
          ></img>
          <span>{data ? data.daily[3].temp.day : null}</span>
          <br />
          <p>{data ? data.daily[3].weather[0].description : null}</p>
        </h1>
      </div>
    </div>
  );
}

export default Thursday;
