import React from 'react'
import { Helmet } from "react-helmet";
import AppRouter from './AppRouter';

const AppContainer = () => {
  return (
    <>
        <Helmet>Title</Helmet>
        <AppRouter/>
    </>
  )
}

export default AppContainer