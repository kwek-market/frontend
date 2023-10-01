import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
};

const DashboardChart = ({ data }: { data: number[] }) => {
  const labels = [
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
  return (
    <Bar
      data={{
        labels: labels,

        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
              "rgba(65, 216, 125, 0.2)",
            ],
            barThickness: 25,
            hoverBackgroundColor: "#41D87D",
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          xAxis: {
            grid: {
              display: false,
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
          },
          yAxis: {
            ticks: {
              stepSize: 20,
            },
            grid: {
              drawBorder: false,
            },
          },
        },
      }}
    />
  );
};

export default DashboardChart;
