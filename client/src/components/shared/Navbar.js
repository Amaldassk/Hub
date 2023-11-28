import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import logo from '../../assets/adfyn.png'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../redux/slice/authSlice';

const Navbar = () => {

  const [loggingOut, setLoggingOut] = useState(false);

  const dispatch = useDispatch();

  const logoutHandler = async() => {
    setLoggingOut(true);
    await dispatch(logoutUser());
    setLoggingOut(false);
  }

  return (
    <nav className="sticky top-0 z-20 mb-5 flex justify-center gap-10 border bg-white p-2 md:items-center md:justify-between md:px-36">
        <Link to='/' className="hidden md:inline-block">
          <h3>Adfyn</h3>
            {/* <img className="w-36" src={logo} alt='adfyn'/> */}
        </Link>
        <div className="flex justify-center">
          <button type="button" className="block w-full px-4 py-2  text-left text-sm text-red-400 hover:cursor-pointer hover:text-red-600" role="menuitem"
            onClick={()=>logoutHandler()} disabled={loggingOut}>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar