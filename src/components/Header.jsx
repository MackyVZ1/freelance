import React from 'react'

function Header() {
  return (
    <div className="bg-blue-400 w-full h-auto py-6">
        <h1 className="text-6xl text-white text-left font-semibold py-6 px-6 sm:text-3xl sm:text-center md:text-4xl md:text-center lg:text-5xl lg:text-left xl:text-6xl xl:text-left ">About</h1>
        <div className="flex justify-between w-full items-center sm:grid md:grid lg:flex xl:flex 2xl:flex">
            <div className="w-auto h-auto px-6">
                <p className="text-white text-3xl font-medium sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-3xl"> The website was created to compile works from the ASC263 and ASC273 courses,</p> 
                <p className="text-white text-3xl font-medium pb-14 sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-3xl"> resembling a diary that collects events occurring over a period of time.</p>
                <p className="text-white text-3xl font-medium sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-3xl">Sirada Boonmarn 6609655359</p>
            </div>
            <div className="w-44 h-44 m-auto p-auto items-center sm:hidden md:hidden lg:block lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-44 2xl:h-44">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Book_%28Search%29.svg"/>
            </div>
        </div>
    </div>
  )
}

export default Header