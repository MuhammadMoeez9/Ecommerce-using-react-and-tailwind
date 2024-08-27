import React, { useEffect, useState } from "react";

function Navbar({ searchFunctionality }) {
  return (
    <nav className="w-[100%] h-[70px] relative flex items-center justify-between pl-4 pr-4 ">
      <h1 id="heading" className="font-bold">
        <q> Wear Zone</q>
      </h1>

      <input 
        onChange={(e) => searchFunctionality(e)}
        type="text"
        id="input"
        placeholder="Search"
        className="w-[30%] h-[40px] px-4 py-2 border border-black rounded-3xl"
      />
      {/* <img src={searchImg} className="h-5 absolute right-8" alt="" /> */}
    </nav>
  );
}

export default Navbar;
