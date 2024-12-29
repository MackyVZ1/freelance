import React from 'react'

function Header() {
  return (
    <div className="bg-blue-400 w-full h-auto py-4 md:py-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white text-center md:text-left font-semibold p-4 md:p-6">
        About
      </h1>
      
      <div className="flex flex-col md:flex-row justify-between w-full items-center px-4 md:px-6 gap-6">
        <div className="w-full md:w-auto">
          <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-center md:text-left">
            The website was created to compile works from the ASC263 and ASC273 courses,
          </p> 
          <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium pb-6 md:pb-14 text-center md:text-left">
            resembling a diary that collects events occurring over a period of time.
          </p>
          <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-center md:text-left">
            Sirada Boonmarn 6609655359
          </p>
        </div>
        
        <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 flex-shrink-0">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Book_%28Search%29.svg"
            alt="Book icon"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header