import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { a1cOptions, bgOptions, bpOptions } from "../State/Chart";
import { StyledButton } from "../Styles/Button.styled";
import { NavBarLink } from "../Styles/Link.styled";
import { StyledA1C } from "../Styles/A1C.styled";
import { StyledBloodpg } from "../Styles/Bloodpg.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const A1CChart = ({ chartDataColaberated, chartData }) => {
  return (
    <Router>
      <ul>
        <NavBarLink>
          <StyledButton to={"/a1cchart/colaberated"}>Colaberated</StyledButton>
        </NavBarLink>
        <NavBarLink>
          <StyledButton to={"/a1cchart/120days"}>120 Days</StyledButton>
        </NavBarLink>
      </ul>
      <Route exact path="/a1cchart/colaberated">
        <StyledA1C>
          {chartDataColaberated && chartDataColaberated.labels && chartDataColaberated.datasets ? (
            <Bar data={chartDataColaberated} options={a1cOptions} />
          ) : (
            <div>No data</div>
          )}
        </StyledA1C>
      </Route>
      <Route path="/a1cchart/120days">
        <StyledA1C>
          {chartData && chartData.labels && chartData.datasets ? (
            <Bar data={chartData} options={a1cOptions} />
          ) : (
            <div>No data</div>
          )}
        </StyledA1C>
      </Route>
    </Router>
  );
};

export const BGChart = ({ chartData }) => {
  return (
    <StyledBloodpg>
      <Line data={chartData} options={bgOptions} />
    </StyledBloodpg>
  );
};

export const BPChart = ({ chartData }) => {
  return (
    <StyledBloodpg>
      <Line data={chartData} options={bpOptions} />
    </StyledBloodpg>
  );
};
