import React from 'react'
import { styled } from 'styled-components'

type ButtonProps = {
  children: React.ReactNode;
  onClick?: ()=> void
}

const Button: React.FC<ButtonProps> = (props) => {
  const Button = styled.div`
 
  position: relative;
  width: 255px;
  height: 50px;
  margin: 20px 20px 0px 0px;
  cursor: pointer;
  
  font-size:1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: #fff;
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    transition: 0.5s;

  &:hover {
    letter-spacing: 3px;
  }
  &::before{
    content: '';
    position:absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left , rgba(255,255,255,0.15), transparent);
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
  }
  &:hover::before{
    transform: skewX(45deg) translateX(200%)

  }

  `

  return (
    <React.Fragment>
       <Button onClick={props.onClick}>{props.children}</Button>
    </React.Fragment>
  )
}

export default Button
 