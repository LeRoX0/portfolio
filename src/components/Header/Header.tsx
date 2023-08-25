import React, {useEffect, useState,useRef} from 'react'
import classes from './Header.module.css'

import ReactTyped from "react-typed";
import logo from '../../assets/lerox.jpg'
import NavBar from '../NavBar/NavBar'
import Button from '../UI/Button';
import { IconBrandDiscord, IconBrandTwitter } from '@tabler/icons-react';
import Portal from '../UI/Portal';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../../store/PortalReduce';
import { RootState } from '../../store/Redux';
const Header = () => {
  const [title, setTitle] = useState('')
  const showState = useSelector((state:RootState)=>{
    return state.portal.show
  })
  const dispatch = useDispatch()
  const imgRef = useRef<HTMLImageElement | null>(null)
  const contentRef = useRef<HTMLImageElement | null>(null)
  useEffect(() => {
    imgRef.current!.style.transform = 'perspective(400px) rotateY(-25deg) scale(0.9) rotateX(10deg)';
    contentRef.current!.style.opacity = '1';
    contentRef.current!.style.transform = 'translateY(0)';
  });
  const handleClick = ()=>{
    dispatch(show())
  }
  return (
    <div>
      {showState && <Portal/>}
      <NavBar/>
      <div className={classes.Home}>
      <div className={classes["img-icons"]}>
      <img ref={imgRef} src={logo}/>
        <div className={classes.icons}>
        <a href='https://discord.gg/WTxgpCe9' target="_blank"><IconBrandTwitter/></a>
        <a href='https://discord.gg/WTxgpCe9' target="_blank"><IconBrandDiscord/></a>
        </div>
      </div>
      <div ref={contentRef} className={classes.content} id="Home">
        <span>&#9889; introduction-</span>
        <h1 className={classes.title}>Hi, I'm Ammar Yasser<br/>Software <ReactTyped strings={["developer",'Engineer']} typeSpeed={200} loop /></h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisi  Corrupti numquam nesciunt assumenda. Eius qui officia labore illum possimus, odio magnam veritatis   necessitatibus ducimus deserunt distinctio totam </p>  
        <div className={classes.buttons}>
        <Button>Download cv</Button>
        <Button onClick={handleClick}>Contact</Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header
