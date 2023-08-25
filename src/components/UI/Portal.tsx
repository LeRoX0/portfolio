import { createPortal } from 'react-dom';
import React, { useRef, useState } from 'react'
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { hide } from '../../store/PortalReduce';

const container = document.getElementById('portal-container') as HTMLElement
const Continer = styled.div`
    
& #popup1 {

    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    height: 100vh;
    z-index: 1;
    width: 100%;
    backdrop-filter: blur(15px);
    justify-content: center;
    align-items: center;
    transition: 1.5s;    

  }
  
  & .popup {
    
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 5s ease-in-out;
    align-items:center;
    margin: 0 auto;
    display: flex;
    text-align: center;
    justify-content: center;


  }
  
  & .popup h1 {
    margin-top: 0;
    color: #333;
    font-size: 5rem;
    font-family: Tahoma, Arial, sans-serif;
  }
  & .popup .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    cursor:pointer;
    border: none;
    background: transparent;
  }
  &.popup .close:hover {
    color: #06D85F;
  }
  & .popup p{
    font-size: 1.4rem;
    color: #bbbbbb;
    max-height: 30%;
    overflow: auto;
    
  }
  & input{
    outline: 10px solid rgba(255, 255, 255, 0.728);
    display: block;
    width: 300px;
    height: 30px;
    margin: 25px;
    border: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.182);
    transition: 0.8s;
    margin-bottom: 40px;
  }
  & button{
    border:none;
    font-size:2rem;
    font-weight:16;
    width: 120px;
    height: 40px;
    background: #333;
    color: white;
    border-radius: 15px;

  }
  & button:hover{

  }
  `
const Pop = () => {
const dispatch = useDispatch()
const [email, setEmail] = useState('')
const [emailIsValid, setEmailIsValid] = useState(false)
const emailRef = useRef<HTMLInputElement | null>(null)
const [massage,setMassage] = useState('')
const [massageIsValid, setMassageIsValid] = useState(false)
const massageRef = useRef<HTMLInputElement | null>(null)
console.log(massage.length)

const handleEmailChange = (e:any)=>{
  setEmail(e.target.value)
  if(!email.match(/\b[\w.-]+@[\w.-]+.\w+\b/)){
    emailRef.current!.style.outline = '10px solid rgb(255 87 87 / 73%)'
    setEmailIsValid(false)
  }else{
      setEmailIsValid(true)
      emailRef.current!.style.outline = '10px solid rgb(87 255 160 / 73%)'
  }
}

const handleMassageChange = (e:any)=>{
  setMassage(e.target.value)
  if(massage.trim().length < 10){
    massageRef.current!.style.outline = '10px solid rgb(255 87 87 / 73%)'
    setMassageIsValid(false)
  }else{
      setMassageIsValid(true)
      massageRef.current!.style.outline = '10px solid rgb(87 255 160 / 73%)'
  }
}

const handleSubmit = async (e: any)=>{
  e.preventDefault()
  if(!emailIsValid && !massageIsValid){
    emailRef.current!.style.outline = '10px solid rgb(255 87 87 / 73%)'
    massageRef.current!.style.outline = '10px solid rgb(255 87 87 / 73%)'
    return;
  }else if(!emailIsValid){
    emailRef.current!.style.outline = '10px solid rgb(255 87 87 / 73%)'
    return;
  }else if(!massageIsValid){
    massageRef.current!.style.outline = '10px solid rgb(255 87 87 / 73%)'
    return
  }
  else{
    
    setEmail('')
    setMassage('')
    setTimeout(() => {
      dispatch(hide())
    }, 3000);
  }
  

}


const handleClick = ()=>{
    dispatch(hide())
}



  return (
    <Continer>
      <div id="popup1" className="overlay">
        <div className="popup">
           
            <button className="close" onClick={handleClick}>&times;</button>

            <form onSubmit={handleSubmit}>
            <h1>Contact</h1>
            <p>        
                send message to Contact with me or use my E-mail
            </p>
            <input ref={emailRef} value={email} onChange={handleEmailChange} type='text' placeholder='E-mail'/>
            <input ref={massageRef} value={massage} onChange={handleMassageChange} type='text' placeholder='massage'/>
            <button type='submit'>submit</button>
            </form>
            
        </div>
       </div>
    </Continer>
  )
}

const Portal = () => {
  return (
    <>
      {createPortal(<Pop/>,container)} 
    </>
  )
}

export default Portal
