import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from './HeaderBar/HeaderBar';

const Layout = () => {
    return (
      <>
        <HeaderBar />
        <Suspense>
          <Outlet />
        </Suspense>
      </>
    );
}

export default Layout