import React from 'react'
import circle from '../../assets/circle.png'
import styled from 'styled-components'

type prop = {
  top?:string;
  left?:string;
  right?:string;
  bottom?:string;
  width?:string;
}
const Circle: React.FC<prop>= ({top, left, right,bottom,width}) => {
  const Circle = styled.img`
   position:absolute;
   top:${top};
   left:${left};
   right:${right};
   bottom:${bottom};
   width:${width};
   z-index:-1;
   animation: test 7s infinite;
   @keyframes test{
    0%{
  
      transform: translateY(0px);
    }
    50%{
      transform: translateY(50px);
    }
    100%{
      transform: translateY(0px);
    }
  }
  `
  return (
    <React.Fragment>
       <Circle src={circle} />
    </React.Fragment>
  )
}

export default Circle
