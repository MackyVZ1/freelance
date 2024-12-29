import React from "react";

function Navbar({ onAsc263Click, onAsc273Click}) {
  return (
    <nav className="bg-white w-full h-auto md:h-20 flex flex-col md:flex-row justify-between items-center border-b-2 border-blue-500 shadow-lg shadow-blue-300 overflow-hidden sticky z-50 top-0">
      {/* ASC263 */}
      <div className="bg-blue-500 text-white w-full md:w-72 lg:w-80 xl:w-96 h-16 md:h-full flex items-center justify-center md:justify-start md:pl-8 lg:pl-12 xl:pl-16">
        <button
          onClick={onAsc263Click} 
          className="text-xl md:text-2xl font-semibold relative group hover:scale-105 transition-transform">
          ASC263
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      <div className="text-blue-500 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl py-4 md:py-0">
        .: All Assignment :.
      </div>

      {/* ASC273 */}
      <div className="bg-blue-500 text-white w-full md:w-72 lg:w-80 xl:w-96 h-16 md:h-full flex items-center justify-center md:justify-end md:pr-8 lg:pr-12 xl:pr-16">
        <button
          onClick={onAsc273Click}
          className="text-xl md:text-2xl font-semibold relative group hover:scale-105 transition-transform">
          ASC273
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;