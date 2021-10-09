import React from "react";

import { iconFacebook, iconGithub, iconLinkedin } from "../../helpers/Icons";

const Footer = () => {
  return (
    <div className="bg-secondary py-7">
      <div className="max-w-4xl mx-auto w-full p-3 divide-y divide-gray-100/50 space-y-3">
        <div className="space-y-3">
          <p className="font-semibold text-sm">
            The purpose of this website is solely to display information
            regarding the products and services available on the Cryptoverse.com
            App. It is not intended to offer access to any of such products and
            services. You may obtain access to such products and services on the
            Cryptoverse.com App.
          </p>
          <p className="font-semibold text-sm">
            Please note that the availability of the products and services on
            the Cryptoverse.com App is subject to jurisdictional limitations.
            Cryptoverse.com may not offer certain products, features and/or
            services on the Cryptoverse.com App in certain jurisdictions due to
            potential or actual regulatory restrictions.
          </p>
        </div>
        <div className="py-3 text-sm flex items-center justify-between sm:flex-col sm:items-start sm:gap-3">
          <p>
            Copyright &copy; 2021 Cryptoverse by{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100053790544558"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary text-xs"
            >
              Mustafa Abdullah
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-1 ">
            <a
              href="https://github.com/MostafaMofeed67"
              target="_blank"
              rel="noreferrer"
              className="hover:animate-spin"
            >
              {iconGithub}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100053790544558"
              target="_blank"
              rel="noreferrer"
              className="hover:animate-spin"
            >
              {iconFacebook}
            </a>
            <a
              href="https://github.com/MostafaMofeed67"
              target="_blank"
              rel="noreferrer"
              className="hover:animate-spin"
            >
              {iconLinkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
