import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";

function FourDayForecast() {
  return (
    <div>
      <div className="cards">
        <Tuesday />
        <Monday />
        <Wednesday />
        <Thursday />
        {/* <dl className="dictionary">{weatherdata.map(createEntry)}</dl> */}
      </div>
      {/* <button onClick={refetch}> Check</button> */}
    </div>
  );
}
export default FourDayForecast;
