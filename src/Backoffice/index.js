import React from 'react'
import Header from './Header'
import Sidebar from './SideBar'
import BackofficeRoutes from '../routes/BackofficeRoutes'

const Backoffice = () => {
  
  return (
      <div>
       <Header />
        <BackofficeRoutes/>
       <Sidebar />
      </div>
  )
}

export default Backoffice