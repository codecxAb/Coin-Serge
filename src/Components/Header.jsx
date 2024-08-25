import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full bg-zinc-900 text-white h-20 flex justify-around items-center px-4">
      <img className="h-10 w-auto" src={Logo} alt="logo" />

      <div className="list flex items-center gap-7 text-xl">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Pricing</a>
      </div>
      <div>
        <select className="mx-5" name="currency" id="currency">
          <option value="usd">USD</option>
          <option value="inr">INR</option>
        </select>
        <button className="rounded bg-green-500 px-6 py-2">Sign in</button>
      </div>
    </div>
  );
};

export default Header;
