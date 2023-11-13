import React, { useMemo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/shared/Navbar'

const PrivateRoutes = ({userData}) => {
    
    const isAuthenticated = useMemo(()=>{
        return(userData)=>{
            return userData;
        }
    },[]);

    return isAuthenticated(userData) ? (
    <div className="scroll-smooth">
        <Navbar/>
        <Outlet/>
    </div>
    ) : (<Navigate to="/signin"/>)
}

export default PrivateRoutes