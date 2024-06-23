import { Box } from '@mui/material'
import React from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'

const Reports = () => {
  const route={
    title:"Reports",
 }
  return (
    <Box sx={{display:'flex'}} >
    <SideBar/>
      <Box  component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
      <TopRoutes route={route}/>
          Reports
      </Box>
  </Box>
  )
}

export default Reports
