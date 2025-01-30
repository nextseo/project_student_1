import React from 'react'
import Layout from '../components/Layout';
import { Outlet } from 'react-router-dom';
import { Button } from '@material-tailwind/react';


const Admin = () => {
  return (
  
    <Layout>
      <Button color="blue">Click Me</Button>
    <Outlet/>
  </Layout>
  )
}

export default Admin