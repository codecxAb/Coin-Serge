import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col w-full items-center mt-20 text-white">
      <h1 className="text-7xl font-medium ">
        Your Own <span className="text-green-600">Crypto</span> Traker
      </h1>
      <form className="mt-10 w-1/3" action="">
        <input
          className=" bg-zinc-800 text-xl w-96 px-2 rounded-s-xl py-3"
          type="text"
          placeholder="search your coin.."
        />
        <input
          className="bg-green-500 px-5 py-3 text-xl rounded-e-xl hover:bg-green-700"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Hero;
