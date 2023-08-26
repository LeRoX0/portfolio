import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';

import Circle from './components/UI/Circle';
import effect from './assets/effect.png'
import About from './components/About/About';
import Experience from './components/MyExperience/Experience';

import LoaderSpinner from './components/UI/LoaderSpinner';
import Footer from './components/Footer/Footer';
import Rating from './components/rating/Rating';
function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },3000)
  },[])
  return (
    <div className="App">
        {isLoading && <LoaderSpinner/>}
        {!isLoading&&(
           <React.Fragment>
                <Circle top="0px" width="450px" left="0px"/>
                  <img style={{position:'absolute',zIndex:-1,top:'-1590px',right:'-1680px'}} src={effect}/>
                   <Header/>
                <Circle right="0px" width="450px" bottom="0px"/>
                <About/>
                <Circle left="0px" width='250px' bottom="-600px"/>
                <Experience/>
                {/* <Circle right="0px" bottom="-1900px"/> */}
                <Rating /> 
                <Footer/>
                
           </React.Fragment>
        )}
    </div>
  );
}

export default App;
