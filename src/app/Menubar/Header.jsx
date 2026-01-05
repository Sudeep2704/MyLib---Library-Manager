import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
    <a href='/' className='logo'>logo</a>

    <nav className='navbar'>
      <a href='/'>Features</a>
      <a href='/'>Pricing</a>
      <a href='/'>Enterprise</a>
      <a href='/'>Open an account</a>
      <a href='/'>Sign in</a>
    </nav>
    </header>
  )
}

export default Header