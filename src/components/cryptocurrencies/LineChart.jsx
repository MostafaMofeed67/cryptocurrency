/* eslint-disable array-callback-return */
import React from "react";
import Heading from "../../helpers/Heading";

import { Line } from "react-chartjs-2";
import Error from "../../helpers/Error";

const LineChart = ({ coinHistory, currentPrice, coinName, errorHistory }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  if (errorHistory) return <Error message={errorHistory.data.message} gap />;

  coinHistory?.data?.history.map((coin) => {
    coinPrice.push(coin.price);
    coinTimestamp.push(new Date(coin.timestamp).toLocaleDateString());
  });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `Price in USD`,
        data: coinPrice,
        fill: false,
        backgroundColor: "#88666c",
        borderColor: "#88666c",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center sm:flex-col sm:gap-5">
        <Heading heading={`${coinName} Price Chart`} />
        <div className="flex gap-5 items-center font-black text-gray-700">
          <h4>{coinHistory?.data?.change}%</h4>
          <p>
            Current {coinName} Price: ${currentPrice}
          </p>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
