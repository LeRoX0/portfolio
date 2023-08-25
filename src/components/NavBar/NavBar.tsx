import React from 'react'
import classes from './NavBar.module.css'
import logo from '../../assets/lerox.jpg'
import { IconBook, IconHome } from '@tabler/icons-react'
const NavBar = () => {
  return (
    <div className={classes.NavBar}>
        {/* <img className={classes.logo} src={logo}/> */}
        <ul>
            <a className={classes.icons} href='#Home'><IconHome/></a>
            <a className={classes.icons} href='#About'><IconBook/></a>
            <a className={classes.icons} href='#Home'><IconHome/></a>
            <a className={classes.icons} href='#Home'><IconHome/></a>
        </ul>
    </div>
  )
}

export default NavBar
