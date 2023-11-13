import React from 'react'
// import logo from '../../assets/adfyn.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 mb-5 flex justify-center gap-10 border bg-white p-2 md:items-center md:justify-between md:px-36">
        <Link to='/' className="hidden md:inline-block">
          <h3>Adfyn</h3>
            {/* <img className="w-36" src={logo} alt='adfyn'/> */}
        </Link>
    </nav>
  )
}

export default Navbar