import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Monday from "./Monday";
import BasicTextFields from "./BasicTextFields";
import TodaysForecast from "./TodaysForecast";
import FourDayForecast from "./FourDayForecast";

function CenteredTabs() {
  const [value, setValue] = React.useState(<FourDayForecast />);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    if (newValue === 1) {
      console.log("two");
      setValue(<FourDayForecast />);
    } else if (newValue === 2) {
      setValue(<Monday />);
    } else {
      setValue(<TodaysForecast />);
    }
  };

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "#white" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Todays Forecast" />
          <Tab label="4 day forecast" />
          <Tab label="More" />
        </Tabs>
      </Box>

      <div className="box-container">
        <div>{value}</div>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>5-Day Forecast.</h1>
      </div>

      <div className="place">
        <BasicTextFields className="cheese" />
        Tampa, Fl, US
      </div>

      <CenteredTabs />
      {/* <h1>hi</h1> */}
    </div>
  );
}

export default App;
