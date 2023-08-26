import classes from './NavBar.module.css'
import { IconBook, IconHome } from '@tabler/icons-react'
const NavBar = () => {
  return (
    <div className={classes.NavBar}>
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
