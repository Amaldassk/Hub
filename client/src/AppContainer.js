import React from 'react'
import { Helmet } from "react-helmet";
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';

const AppContainer = () => {

  return (
    <>
      <Provider store={appStore}>
        <Helmet>Title</Helmet>
        <AppRouter/>
      </Provider>
    </>
  )
}

export default AppContainer