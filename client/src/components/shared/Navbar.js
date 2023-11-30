import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo-ks.png'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../redux/slice/authSlice';
import {Transition} from '@headlessui/react';
import useHandleOutsideClick from '../../hooks/useHandleOutsideClick';

const Navbar = ({userData}) => {

  const [loggingOut, setLoggingOut] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const dispatch = useDispatch();

  const logoutHandler = async() => {
    setLoggingOut(true);
    await dispatch(logoutUser());
    setLoggingOut(false);
  }

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  }

  useHandleOutsideClick(dropdownRef,()=>setShowDropdown(false));

  return (
    <nav className="sticky top-0 z-20 flex justify-center gap-10 border bg-white p-3 md:items-center md:justify-between md:px-36">
        <Link to='/' className="hidden md:inline-block">
          <img className="w-52" src={logo} alt='ks industries'/>
        </Link>
        <div className="relative flex justify-end md:w-36">
          <button type="button" className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full" onClick={handleProfileClick}>
            <img src={userData.avatar} alt="profile" className="h-8 w-8 rounded-full object-cover"/>
          </button>
          <Transition
            show={showDropdown}
            enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
          >
            {()=>(
              <div ref={dropdownRef} className="absolute right-0 top-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <div className="py-1" role="none">
                  <div className="flex flex-col items-center">
                    <img
                      src={userData.avatar}
                      alt="profile"
                      className="mb-2 h-16 w-16 rounded-full object-cover"
                    />
                    <div className="text-sm font-semibold text-gray-700 hover:underline">
                      <Link to={`/profile`} onClick={handleProfileClick}>{userData.name}</Link>
                    </div>
                    <div className="text-sm text-gray-500">{userData.email}</div>
                  </div>
                </div>
                <hr className="mt-2" />
                <div className="flex justify-center">
                  <button type="button" className="block w-full px-4 py-2  text-left text-sm text-red-400 hover:cursor-pointer hover:text-red-600" role="menuitem"
                    onClick={()=>logoutHandler()} disabled={loggingOut}>Logout</button>
                </div>
              </div>
            )}
          </Transition>
        </div>
        
    </nav>
  )
}

export default Navbar