import { Box,Grid } from '@mui/material'
import React from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import { Constant } from '../../../../constant/sidebarLinks'
import LibraryCard from './components/LibraryCard'

const Library = () => {
  const route={
    title:"Library",
 }
  return (
    <Box sx={{display:'flex'}}>
      <SideBar/>
        <Box  component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
          <TopRoutes route={route}/>
          
         <Grid container>
           {
            Constant.Library.map((item,index)=> <LibraryCard item={item} index={index} />)
           }
         </Grid>
        </Box>
    </Box>
  )
}

export default Library
