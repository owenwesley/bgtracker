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
import { a1cOptions, a1cOptions120Day, bgOptions, bpOptions } from "../State/Chart";
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

const getRgbFromColor = (color) => {
  if (!color) return null;
  if (Array.isArray(color)) {
    return color[0];
  }
  const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d\.]+)?\)/i);
  if (rgbaMatch) {
    return {
      r: Number(rgbaMatch[1]),
      g: Number(rgbaMatch[2]),
      b: Number(rgbaMatch[3]),
    };
  }
  const hexMatch = color.replace(/\s/g, "").match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) {
      hex = hex.split("").map((c) => c + c).join("");
    }
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16),
    };
  }
  return null;
};

const getContrastingTextColor = (bgColor) => {
  const rgb = getRgbFromColor(bgColor);
  if (!rgb) return "#000";
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance >= 0.6 ? "#000" : "#fff";
};

const barLabelPlugin = {
  id: "barLabelPlugin",
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      if (meta.hidden) return;

      meta.data.forEach((bar, index) => {
        const labelValue = dataset.avg || dataset.data[index];
        const labelValue2 = dataset.a1c || dataset.data[index];
        if (labelValue === undefined || labelValue === null) return;

        const fontSize = 12;
        ctx.save();
        ctx.font = `${fontSize}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const bgColor = Array.isArray(dataset.backgroundColor)
          ? dataset.backgroundColor[index]
          : dataset.backgroundColor;
        ctx.fillStyle = getContrastingTextColor(bgColor);

        const x = bar.x;
        const barCenterY = bar.y + bar.height / 2;
        const lineSpacing = 16;

        ctx.fillText(`A1C: ${labelValue2} %`,
          x, barCenterY - lineSpacing / 2);
        ctx.fillText(`Avg: ${labelValue} mg / dl`,
          x, barCenterY + lineSpacing / 2);
        ctx.restore();
      });
    });
  },
};

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
            <Bar data={chartDataColaberated} options={a1cOptions} plugins={[barLabelPlugin]} />
          ) : (
            <div>No data</div>
          )}
        </StyledA1C>
      </Route>
      <Route path="/a1cchart/120days">
        <StyledA1C>
          {chartData && chartData.labels && chartData.datasets ? (
            <Bar data={chartData} options={a1cOptions120Day} />
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
      {chartData && chartData.labels && chartData.datasets ? (
        <Line data={chartData} options={bgOptions} />
      ) : (
        <div>No data</div>
      )}
    </StyledBloodpg>
  );
};

export const BPChart = ({ chartData }) => {
  return (
    <StyledBloodpg>
      {chartData && chartData.labels && chartData.datasets ? (
        <Line data={chartData} options={bpOptions} />
      ) : (
        <div>No data</div>
      )}
    </StyledBloodpg>
  );
};
