import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface BarChartProps {
  title: string;
}

const data = {
  labels: [
    "Dissatisfied",
    "Somewhat dissatisfied",
    "Neutral",
    "Somewhat Neutral",
    "Satisfied",
  ],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "#3E4095",
    },
  ],
};

const BarChart = ({ title }: BarChartProps) => {
  // displayName: "BarExample",

  return (
    <>
      <div className="w-full   p-2 md:p-6 flex items-center justify-center">
        <div className="w-fit shadow-xl  min-w-fit xl:w-9/12 rounded-xl  p-2 md:p-6 ">
          <div className="">
            <h2>{title}</h2>
            <Bar data={data} width={400} height={200} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
