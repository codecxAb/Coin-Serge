import React from "react";

const Table = () => {
  return (
    <div className="text-white w-full flex justify-center mt-10 ">
      <div className="table-layout border border-1 w-1/2 text-xl flex justify-between px-1 bg-zinc-700 ">
        <h1 className="bg-transparent">#</h1>
        <h1 className="bg-transparent">Coins</h1>
        <h1 className="bg-transparent">Price</h1>
        <h1 className="bg-transparent">24h Change</h1>
        <h1 className="bg-transparent">Market Cap</h1>
      </div>
    </div>
  );
};

export default Table;
