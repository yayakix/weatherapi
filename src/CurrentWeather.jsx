// import useFetch from "./UseFetch";

// function CurrentWeather() {
//   const { data, loading, error, refetch } = useFetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=London&appid=17919654dd5285cd380229ac9cf63251&units=imperial#"
//   );

//   //   const tuesdayicon = {joke ? "http://openweathermap.org/img/wn/"+ joke.list[1].weather[0].icon +"@2x.png": null }

//   if (loading) return <h1> LOADING...</h1>;

//   if (error) console.log(error);

//   return (
//    <div className="cards">
//         <div className="card">
//           <h1>
//             <span className="title">Today</span>
//             <br />
//             <span className="date">{data ? data.list[0].dt_txt : null}</span>
//             <br />
//             <img
//               src={
//                 data
//                   ? "http://openweathermap.org/img/wn/" +
//                     data.list[0].weather[0].icon +
//                     "@2x.png"
//                   : null
//               }
//               alt="icon pic"
//             ></img>
//             {/* <span>{data.list[0].main.temp}F</span>  */}
//             <br />
//             {/* <span>{data.list[0].weather[0].description}</span> */}
//           </h1>
//         </div>
//         </div>
//   );
// }

// export default CurrentWeather;

// under constrcution