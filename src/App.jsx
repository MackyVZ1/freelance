import React, { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ASC263 from './components/ASC263'
import ASC273 from './components/ASC273'

function App() {
  const asc263Ref = useRef(null);
  const asc273Ref = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-['Rubik']">
      {/**Navigator Bar */}
      <Navbar onAsc263Click={() => scrollToComponent(asc263Ref)}
        onAsc273Click={() => scrollToComponent(asc273Ref)}/>
      {/**Header that description about the website */}
      <Header/>
      {/**ASC263 Assignment */}
      <ASC263 ref={asc263Ref}/>
      {/**ASC273 Assignment */}
      <ASC273 ref={asc273Ref}/>
    </div>
  )
}

export default App
