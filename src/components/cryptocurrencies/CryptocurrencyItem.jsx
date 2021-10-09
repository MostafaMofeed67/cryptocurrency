import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";

const CryptocurrencyItem = ({
  id,
  name,
  rank,
  iconUrl,
  price,
  marketCap,
  change,
}) => {
  return (
    <Link
      to={`/crypto/${id}`}
      className=" w-full bg-white  divide-y-2 hover:shadow-coin transition-all duration-500 ease-in-out"
    >
      <div className="flex justify-between p-5 items-center">
        <h4 className="font-extrabold">
          {rank}. {name}
        </h4>
        <img src={iconUrl} alt="" className="w-8 h-8 select-none" />
      </div>
      <ul className="p-5 py-9 space-y-3">
        <li className="font-bold">
          Price: <span className="text-sm font-normal"> {millify(price)}</span>
        </li>
        <li className="font-bold">
          Market Cap:{" "}
          <span className="text-sm font-normal">{millify(marketCap)}</span>
        </li>
        <li className="font-bold">
          Daily Change:
          <span className="text-sm font-normal"> {millify(change)}%</span>
        </li>
      </ul>
    </Link>
  );
};

export default CryptocurrencyItem;
