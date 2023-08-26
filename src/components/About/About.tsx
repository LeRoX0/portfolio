import { useEffect, useState, useRef } from 'react'
import classes from './About.module.css'
import { IconCurrentLocation } from '@tabler/icons-react'
const dummyD = [
    {title:'Experience',msg:'12 years'},
    {title:'Customers',msg:"more than 15 customers"},
    {title:'Company',msg:'more than 15 customers'},
]
const About = () => {
  const [data] = useState(dummyD)
  const About = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{
    window.onscroll = ()=>{
        About.current!.style.opacity = '1';
        About.current!.style.transform = 'translate(0px)';
    }
  })
  return (
    <div ref={About} className={classes.About} id='About'>
           {/* <h1 className={classes.title}>About</h1> */}
         <div className={classes.container}>
            <div className={classes.content}>
              <h1>Learn more <br/>about me</h1>
                <table>
                  <tbody>
                  <tr>
                    <th>Information</th>
                    <th>Education</th>
                    <th>courses</th>
                  </tr>
                    <tr>
                    <td>name: ammar yasser</td>
                    <td>Education: hight school</td>
                    <td>
React - The Complete Guide 2023 (incl. React Router & Redux)
</td>
                    </tr>
                    <tr>
                    <td>age: 15 years</td>
                    <td></td>
                    <td>
Advanced CSS and Sass: Flexbox, Grid, Animations and More!
</td>
                    </tr>
  
                  </tbody>
                </table>
             
            </div>
            <div className={classes.cards}>
            {data.map((item, index)=>(
              <div key={index} className={classes.card}>
                <div className={classes.head}>
                  <span className={classes.icon}>
                    <IconCurrentLocation size='40px'/>
                  </span>
                  <h2>{item.title}</h2>
                </div>
            
                <li>{item.msg}</li>
           
              </div>
           ))} 
           </div>
        </div>
  
    </div>
  
  )
}

export default About
