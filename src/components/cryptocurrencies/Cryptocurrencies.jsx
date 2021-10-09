import React, { useEffect, useState } from "react";
import Error from "../../helpers/Error";
import Loader from "../../helpers/Loader";
import { useGetCryptosQuery } from "../../store/CryptoApi";
import CryptocurrencyItem from "./CryptocurrencyItem";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching, error } = useGetCryptosQuery(count);
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setCoins(filteredData);
  }, [data?.data?.coins, searchTerm]);

  if (isFetching) return <Loader />;
  if (error) return <Error message={error.data.message} />;

  return (
    <>
      {!simplified && (
        <div className="mb-7 bg-white w-full max-w-xs p-5 py-7 shadow-md relative">
          <input
            required
            id="search"
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-gray-400 peer  border-b-2 border-gray-300 focus:outline-none font-Nunito"
          />
          <label
            htmlFor="search"
            className="absolute font-semibold text-gray-400 text-sm top-7 left-5 peer-focus:top-3 peer-valid:top-3 peer-focus:text-xs peer-valid:text-xs peer-focus:text-primary-light peer-valid:text-primary transition-all duration-300 ease-in-out"
          >
            Search Cryptocurrency
          </label>
        </div>
      )}
      <div className="grid grid-cols-4 xl:grid-cols-3  md:grid-cols-2 m sm:grid-cols-1 gap-7">
        {coins?.map((coin) => (
          <CryptocurrencyItem
            key={coin.id}
            id={coin.id}
            name={coin.name}
            iconUrl={coin.iconUrl}
            marketCap={coin.marketCap}
            price={coin.price}
            change={coin.change}
            rank={coin.rank}
          />
        ))}
      </div>
    </>
  );
};

export default Cryptocurrencies;
