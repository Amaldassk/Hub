import React from 'react'
import UserProfile from '../components/profile/UserProfile'
import { useSelector } from 'react-redux'

const Profile = () => {

  const userData = useSelector(state=>state.auth?.userData);

  return (
    <div className='main-section'>
      <UserProfile userData={userData}/>
    </div>
  )
}

export default Profile