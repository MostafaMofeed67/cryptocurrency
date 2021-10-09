import millify from "millify";
import React, { useState } from "react";
import { useParams } from "react-router";
import Heading from "../../helpers/Heading";
import Loader from "../../helpers/Loader";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../store/CryptoApi";

import {
  iconDetails1,
  iconDetails2,
  iconDetails3,
  iconDetails4,
  iconDetails5,
  iconDetails6,
  iconDetails7,
  iconDetails8,
  iconNav1,
} from "../../helpers/Icons";

import SelectDropdown from "../../helpers/SelectDropdown";
import HTMLReactParser from "html-react-parser";
import LineChart from "./LineChart";
import Error from "../../helpers/Error";

const time = [
  { name: "3h" },
  { name: "24h" },
  { name: "7d" },
  { name: "30d" },
  { name: "1y" },
  { name: "3m" },
  { name: "3y" },
  { name: "5y" },
];

const CryptocurrencyDetails = () => {
  const [timePeriod, setTimePeriod] = useState("7d");

  const { id } = useParams();

  const { data, isFetching, error } = useGetCryptoDetailsQuery(id);
  const { data: coinHistory, error: errorHistory } = useGetCryptoHistoryQuery({
    id,
    timePeriod,
  });

  if (isFetching) return <Loader />;

  if (error) return <Error message={error.data.message} />;

  const coinDetails = data?.data?.coin;

  const coinStats = [
    {
      icon: iconDetails1,
      title: "Price to USD",
      value: `$ ${millify(coinDetails.price)}`,
    },
    {
      icon: iconDetails2,
      title: "Rank",
      value: millify(coinDetails.rank),
    },
    {
      icon: iconDetails3,
      title: "24h Volume",
      value: `$ ${millify(coinDetails.volume)}`,
    },
    {
      icon: iconDetails1,
      title: "Market Cap",
      value: `$ ${millify(coinDetails.marketCap)}`,
    },
    {
      icon: iconDetails4,
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(coinDetails.allTimeHigh.price)}`,
    },
  ];
  const globalStats = [
    {
      icon: iconDetails7,
      title: "Number Of Markets",
      value: coinDetails.numberOfMarkets,
    },
    {
      icon: iconNav1,
      title: "Number Of Exchanges",
      value: coinDetails.numberOfExchanges,
    },
    {
      icon: iconDetails8,
      title: "Approved Supply",
      value: coinDetails.approvedSupply ? iconDetails5 : iconDetails6,
    },
    {
      icon: iconDetails8,
      title: "Total Supply",
      value: `$ ${millify(
        coinDetails.totalSupply === null ? 18836281 : coinDetails.totalSupply
      )}`,
    },
    {
      icon: iconDetails8,
      title: "Circulating Supply",
      value: `$ ${millify(coinDetails.circulatingSupply)}`,
    },
  ];

  return (
    <>
      <div className="text-center space-y-3 mt-5 border-b-2 border-gray-200 pb-8 mb-10 ">
        <Heading heading={`${coinDetails.name} (${coinDetails.slug}) Price`} />
        <p className="font-semibold">
          {`${coinDetails.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.`}
        </p>
      </div>
      <SelectDropdown
        name={time}
        placeholder={timePeriod}
        onClick={setTimePeriod}
      />
      <LineChart
        coinHistory={coinHistory}
        errorHistory={errorHistory}
        currentPrice={millify(coinDetails.price)}
        coinName={coinDetails.name}
      />
      <div className="grid grid-cols-2 gap-10 gap-y-10 sm:grid-cols-1 mt-10 mb-10">
        <div className=" max-w-sm w-full sm:max-w-full">
          <Heading heading={`${coinDetails.name} Value Statistics`} small />
          <p className="text-sm mt-3 mb-6">
            {`An overview showing the stats of ${coinDetails.name}`}
          </p>
          <ul className="divide-y-2">
            {coinStats.map((coin, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 hover:bg-white/50 transition-all duration-300 ease-in-out "
              >
                <div className="flex gap-3 items-center">
                  {coin.icon}
                  <p className="text-sm font-semibold">{coin.title}</p>
                </div>
                <p className="font-extrabold text-gray-700">{coin.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className=" max-w-sm w-full ml-auto sm:m-0 sm:max-w-full">
          <Heading heading="Other Statistics" small />
          <p className="text-sm mt-3 mb-6">
            An overview showing the stats of all cryptocurrencies
          </p>
          <ul className="divide-y-2">
            {globalStats.map((coin, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 hover:bg-white/50 transition-all duration-300 ease-in-out "
              >
                <div className="flex gap-3 items-center">
                  {coin.icon}
                  <p className="text-sm font-semibold">{coin.title}</p>
                </div>
                <p className="font-extrabold text-gray-700">{coin.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 sm:grid-cols-1">
        <div className=" max-w-lg w-full">
          <Heading heading={`What is ${coinDetails.name}`} small gap />
          {HTMLReactParser(coinDetails.description)}
        </div>
        <div className=" max-w-lg w-full ml-auto sm:m-0">
          <Heading heading={`${coinDetails.name} Links`} small gap />
          <ul className="divide-y-2">
            {coinDetails.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center p-4 hover:bg-white/50 transition-all duration-300 ease-in-out "
                >
                  <p className="text-sm font-semibold">{link.type}</p>
                  <p className="font-extrabold text-gray-700">{link.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CryptocurrencyDetails;
