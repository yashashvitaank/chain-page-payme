import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ["Sep 1", "Sep 8", "Sep 15"],
    datasets: [
      {
        label: "Polygon POS Chain Transaction History",
        data: [2400, 4000, 2600, 3400, 3000], 
        borderColor: "#000",
        borderWidth: 2,
        tension: 0.4,
        fill: false, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      y: {
        min: 2400,
        max: 4000,
        ticks: {
          stepSize: 400,
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-58 flex justify-center items-center">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
