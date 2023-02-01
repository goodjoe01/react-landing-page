import React, {useState} from 'react'
import { RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import { Link } from 'react-scroll'
import './navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () =>{
  return (
    <>
    <Link href='#' to='home' smooth={true} duration={500} > <p>Home</p> </Link>
    <Link href='#' to='whatgpt3' smooth={true} duration={500} > <p>What is GPT3</p> </Link>
    <Link href='#' to='possibility' smooth={true} duration={500} > <p>Open AI</p> </Link>
    <Link href='#' to='features' smooth={true} duration={500} > <p>Case Studies</p> </Link>
    <Link href='#' to='blog' smooth={true} duration={500} > <p>Blog</p> </Link>
    </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/> 
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && 
          (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu/>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
