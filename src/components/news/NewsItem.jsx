import React from "react";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const NewsItem = ({
  description,
  name,
  imageUrl,
  url,
  date,
  brand,
  brandImage,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="bg-white p-5 space-y-8 sm:space-y-4 hover:shadow-news transition-all duration-500 ease-in-out "
    >
      <div className="flex justify-between gap-10 items-center sm:flex-col sm:gap-5">
        <h6 className="text-primary font-extrabold text-xl line-clamp-2">
          {name}
        </h6>
        <img
          src={imageUrl || demoImage}
          alt=""
          className="w-24 h-24 object-cover sm:w-full select-none"
        />
      </div>
      <p className="line-clamp-3">{description}</p>
      <div className="flex justify-between items-center sm:flex-col sm:items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 overflow-hidden">
            <img
              src={brandImage || demoImage}
              alt=""
              className="w-full h-full object-cover  select-none"
            />
          </div>
          <p className="text-sm">{brand}</p>
        </div>
        <p className="text-sm sm:self-end">{date}</p>
      </div>
    </a>
  );
};

export default NewsItem;
