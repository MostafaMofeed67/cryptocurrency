import moment from "moment";
import React, { useState } from "react";
import Error from "../../helpers/Error";
import Loader from "../../helpers/Loader";
import SelectDropdown from "../../helpers/SelectDropdown";
import { useGetCryptosQuery } from "../../store/CryptoApi";
import { useGetNewsQuery } from "../../store/CryptoNewsApi";
import NewsItem from "./NewsItem";

const News = ({ simplified }) => {
  const { data: cryptoData } = useGetCryptosQuery(100);
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data, isFetching, error } = useGetNewsQuery({
    newsCategory,
    count: simplified ? 8 : 40,
  });

  if (isFetching) return <Loader />;

  if (error) return <Error message={error.data.message} />;

  return (
    <>
      {!simplified && (
        <SelectDropdown
          name={cryptoData?.data?.coins}
          placeholder="Select a crypto"
          onClick={setNewsCategory}
        />
      )}

      <div className="grid grid-cols-2 gap-7 sm:grid-cols-1 mt-10">
        {data?.value?.map((item, i) => (
          <NewsItem
            key={i}
            description={item.description}
            name={item.name}
            imageUrl={item.image?.thumbnail?.contentUrl}
            url={item.url}
            date={moment(item.datePublished).startOf("mm").fromNow()}
            brand={item.provider[0]?.name}
            brandImage={item.provider[0]?.image?.thumbnail?.contentUrl}
          />
        ))}
      </div>
    </>
  );
};

export default News;
