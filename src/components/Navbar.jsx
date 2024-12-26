import React from "react";

function Navbar({ onAsc263Click, onAsc273Click}) {
  return (
    <nav className="bg-white w-full h-20 flex justify-between items-center border-b-2 border-blue-500 shadow-lg shadow-blue-300 overflow-hidden sticky z-50 top-0">
      {/*ASC263 */}
      <div
        className="bg-blue-500 text-white w-96 h-full flex items-center pl-32 -skew-x-[-35deg] sm:w-56 md:64 lg:w-72 xl:w-80 2xl:w-96 sm:pl-20 md:pl-20 lg:pl-28 xl:pl-32"
        style={{ marginLeft: "-40px" }}
      >
        <button
        onClick={onAsc263Click} 
        className="-skew-x-[35deg] text-2xl font-semibold relative group items-start sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          ASC263
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
      <div className="text-blue-500 font-medium text-4xl 2xl:text-4xl xl:text-2xl lg:text-xl md:text-base sm:text-base">
        .: All Assignment :.
      </div>
      {/*ASC273 */}
      <div
        className="bg-blue-500 text-white text-2xl w-96 h-full flex items-center pl-32 skew-x-[-35deg] sm:w-56 md:64 lg:w-72 xl:w-80 2xl:w-96 sm:pl-20 md:pl-20 lg:pl-28 xl:pl-32"
        style={{ marginRight: "-40px" }}
      >
        <button
         onClick={onAsc273Click}
         className="-skew-x-[-35deg] text-2xl font-semibold relative group sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          ASC273
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
