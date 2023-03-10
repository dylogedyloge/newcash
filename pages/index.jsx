import Head from "next/head";
import { FormattedMessage } from "react-intl";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function Home({ dir }) {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <>
      <Head>
        <title>Flight</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/newcashlogo.svg" />
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/ar" hrefLang="ar" />
        <link rel="alternate" href="http://example.com/fa" hrefLang="fa" />
      </Head>

      <main
        dir={dir}
        className=" w-screen bg-[url('/airplane.jpg')] bg-cover bg-no-repeat h-full"
      >
        <section>
          <div className="card shadow-xl flex justify-center min-h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/5"></div>

            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
              <div className="w-full h-full bg-base-100 card-body rounded-sm">
                <h1 className=" tracking-wider card-title content-center">
                  <FormattedMessage id="page.home.chooseYourFlight" />
                </h1>

                <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        {" "}
                        <FormattedMessage id="page.home.origin" />
                      </span>
                    </label>
                    <select className="select select-bordered select-success">
                      <option>Tehran</option>
                      <option>Mashhad</option>
                    </select>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        <FormattedMessage id="page.home.destination" />
                      </span>
                    </label>
                    <select className="select select-bordered select-success">
                      <option>Mashhad</option>
                      <option>Tehran</option>
                    </select>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <FormattedMessage id="page.home.date" />
                    </label>
                    <Datepicker
                      primaryColor={"emerald"}
                      useRange={false}
                      asSingle={true}
                      value={value}
                      onChange={handleValueChange}
                      inputClassName="input input-bordered input-success w-full max-w-xs border-success rounded-sm"
                    />
                  </div>

                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <FormattedMessage id="page.home.numOfPassengers" />
                    </label>
                    <input
                      type="number"
                      className="input input-bordered input-success w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">
                        <FormattedMessage id="page.home.class" />
                      </span>
                    </label>
                    <select className="select select-bordered select-success">
                      <option>Economy</option>
                      <option>Business</option>
                    </select>
                  </div>
                  <button className="btn btn-success flex items-center justify-between w-full px-6 py-3 mt-9 text-sm tracking-wide ">
                    <span>
                      <FormattedMessage id="page.home.search" />
                    </span>

                    <FaSearch />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
