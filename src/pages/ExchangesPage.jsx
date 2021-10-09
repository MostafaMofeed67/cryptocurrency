import millify from "millify";
import React from "react";
import Exchanges from "../components/exchanges/Exchanges";
import Error from "../helpers/Error";
import Loader from "../helpers/Loader";
import { useGetCryptoExchangesQuery } from "../store/CryptoApi";

const ExchangesPage = () => {
  const { data, isFetching, error } = useGetCryptoExchangesQuery();

  if (isFetching) return <Loader />;

  if (error) return <Error message={error.data.message} />;

  return (
    <>
      <div className=" overflow-auto no-scroll ">
        <div className="flex px-4 mb-2 ">
          <h6 className="min-w-[150px] w-full font-semibold">Exchanges</h6>
          <h6 className="min-w-[150px] w-full font-semibold">24h Volume</h6>
          <h6 className="min-w-[150px] w-full font-semibold">Markets</h6>
          <h6 className="min-w-[150px] w-full font-semibold">Change</h6>
        </div>
        {data?.data?.exchanges.map((item) => (
          <Exchanges
            key={item.id}
            description={item.description}
            rank={item.rank}
            name={item.name}
            imgUul={item.iconUrl}
            volume={millify(item.volume)}
            markets={millify(item.numberOfMarkets)}
            change={millify(item.marketShare)}
          />
        ))}
      </div>
    </>
  );
};

export default ExchangesPage;
