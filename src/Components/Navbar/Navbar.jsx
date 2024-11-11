import React from 'react'
import './Navbar.css'
import {useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () =>{

    const [sticky, setSticky] = useState(true);

    useEffect(() => {
          window.addEventListener('scroll', () =>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
          })
     }, []);

     const[mobileMenu, setMobileMenu] = useState(false);
     const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false): setMobileMenu(true)
     }

    return(
        <nav className={`container ${sticky ? 'dark-nav': '' }`}>
            <img src={logo} className="logo" alt="" />
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link smooth={true} duration={500} offset={0} to='hero container'>Home</Link></li>
                <li><Link smooth={true} duration={500} offset={-260} to='programs'>Program</Link></li>
                <li><Link smooth={true} duration={500} offset={-150} to='about'>About us</Link></li>
                <li><Link smooth={true} duration={500} offset={-260} to='campus'>Campus</Link></li>
                <li><Link smooth={true} duration={500} offset={-260} to='testimonials'>Testimonials</Link></li>
                <li><Link smooth={true} duration={500} offset={-260} to='contact' className='btn'>Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick = {toggleMenu}/>
        </nav>
    )
}

export default Navbar