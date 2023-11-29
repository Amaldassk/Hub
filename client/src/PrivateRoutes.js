import React, { useEffect, useMemo } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import { logoutUser } from './redux/slice/authSlice';
import { useDispatch } from 'react-redux';

const PrivateRoutes = ({userData}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAuthenticated = useMemo(()=>{
        return(userData, accessToken)=>{
            return userData && accessToken;
        }
    },[]);

    const token = localStorage.getItem("profile");
    const accessToken = JSON.parse(token)?.accessToken;

    useEffect(() => {
        if (!isAuthenticated(userData, accessToken)) {
          dispatch(logoutUser());
          navigate("/signin");
        }
      }, [isAuthenticated]);

    return isAuthenticated(userData, accessToken) ? (
    <div className="scroll-smooth">
        <Navbar userData={userData}/>
        <Outlet/>
    </div>
    ) : (<Navigate to="/signin"/>)
}

export default PrivateRoutes