import React, { useEffect, useRef, useState } from 'react'
import js from '../../assets/languages/technology.png'
import classes from './Experience.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, counterPercent } from '../../store/Redux'

const Experience = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch()
  const svg = useRef<any>(null)
  const data = useSelector((state:RootState)=>{
    return state.experience
  })
  useEffect(() => {
      if(window.scrollY >= 1200){
        const interval = setInterval(() => { 
            dispatch(counterPercent())
        }, 10);
        return () => {
          clearInterval(interval);
        };
      }  
  }, [data, window.scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1200) {
        setScrolled(true);
        svg.current!.style.strokeDasharray = '400 700';  
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className={classes.experience}>
      <div>
        <div className={classes.title}>
            <p>Experience</p>
            <h1>My expertise in technology</h1>
        </div>

        <div className={classes["experience-cards"]}>
        {
          data.map((item, index)=>(
            <div key={index} className={classes["card-container"]}>
              <div className={classes.card}>
              <img src={js}/>
              <svg ref={svg} className={classes.stroke} width="200" height="200">
                  <circle fill='transparent' cx="100" cy="100" r="60" />
                  <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" className={classes.percent}>
                  <tspan x="100" dy="0" fill="#BFBFBF" fontWeight="900" fontFamily='system-ui' fontSize={30}>
                    {item.percent}%
                  </tspan>
                  </text>
              </svg>
              <h1>{item.title}</h1>
              </div>
            </div>
          ))
        }
        </div>

      </div>
    </div>
  )
}

export default Experience
