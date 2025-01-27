import React from 'react'

const Navbar = () => {
  return (
    <nav className='container'>
        <div className='logo'>
            <img src='/public/brand_logo.png' alt="logo" />
        </div>
        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button className='login-btn'>Login</button>
    </nav>
  )
}

export default Navbar