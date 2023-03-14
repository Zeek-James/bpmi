import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface BarChartProps {
  title: string;
  colours: string[];
}

const MultiDataBarChart = ({ title, colours }: BarChartProps) => {
  const data = {
    labels: ["Banking and Finance", "Telecommunication", "Transport"],
    datasets: [
      {
        label: "Assigned Responses",
        data: [157, 210, 140],
        backgroundColor: colours[0],
        borderWidth: 2,
        borderRadius: 10,
      },
      {
        label: "Viewed Responses",
        data: [62, 93, 71],
        backgroundColor: colours[1],
        borderWidth: 2,
        borderRadius: 10,
      },
    ],
  };

  return (
    <>
      <div className="w-fit shadow-xl  min-w-fit xl:w-9/12 rounded-xl  p-2 md:p-6 ">
        <div className="">
          <h2 className="text-2xl text-[#3E4095] mb-3">{title}</h2>
          <Bar data={data} width={300} height={150} />
        </div>
      </div>
    </>
  );
};

export default MultiDataBarChart;
