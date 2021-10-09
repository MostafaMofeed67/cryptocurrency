import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import Cryptocurrencies from "../components/cryptocurrencies/Cryptocurrencies";
import News from "../components/news/News";
import Error from "../helpers/Error";
import Heading from "../helpers/Heading";
import Loader from "../helpers/Loader";
import { useGetCryptosQuery } from "../store/CryptoApi";

const HomePage = () => {
  const { data, isFetching, error } = useGetCryptosQuery(10);
  const stats = data?.data?.stats;

  if (isFetching) return <Loader />;
  if (error) return <Error message={error.data.message} />;

  return (
    <>
      <Heading heading="Global Crypto Stats" />
      <div className="mt-8 grid grid-cols-2 gap-5 mb-10 sm:grid-cols-1 sm:gap-3">
        <div className="mb-1">
          <h4>Total Cryptocurrencies</h4>
          <p className="text-xl font-bold text-gray-700">
            {millify(stats.total)}
          </p>
        </div>
        <div className="mb-1">
          <h4>Total Exchanges</h4>
          <p className="text-xl font-bold text-gray-700">
            {millify(stats.totalExchanges)}
          </p>
        </div>
        <div className="mb-1">
          <h4>Total Market Cap</h4>
          <p className="text-xl font-bold text-gray-700">
            {millify(stats.totalMarketCap)}
          </p>
        </div>
        <div className="mb-1">
          <h4>Total 24h Volume</h4>
          <p className="text-xl font-bold text-gray-700">
            {millify(stats.total24hVolume)}
          </p>
        </div>
        <div className="mb-1">
          <h4>Total Markets</h4>
          <p className="text-xl font-bold text-gray-700">
            {millify(stats.totalMarkets)}
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-8 sm:flex-col sm:gap-3">
        <Heading heading="Top 10 CryptoCurrencies in the world" />
        <Link
          className="text-xl text-primary-light font-semibold hover:text-secondary transition-all sm:text-right sm:text-base"
          to="/cryptocurrencies"
        >
          Show More
        </Link>
      </div>
      <Cryptocurrencies simplified />
      <div className="flex justify-between mb-8 mt-10 sm:flex-col sm:gap-3">
        <Heading heading="Latest Crypto news" />
        <Link
          className="text-xl text-primary-light font-semibold hover:text-secondary transition-all sm:text-right sm:text-base"
          to="/news"
        >
          Show More
        </Link>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
