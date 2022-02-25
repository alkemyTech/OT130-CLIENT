import React from 'react'
import Header from './Header'
import Sidebar from '../Components/Backoffice/Sidebar'
import BackofficeRoutes from '../rutas/BackofficeRoutes'

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