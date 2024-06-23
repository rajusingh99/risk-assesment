import { Box,Grid } from '@mui/material'
import React from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import { Constant } from '../../../../constant/sidebarLinks'
import LibraryCard from './components/LibraryCard'
import CopyRight from '../components/CopyRight'

const Library = () => {
  const route={
    title:"Library",
 }
  return (
    <Box sx={{display:''}}>
       <Box className='flex'>
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

       <Box className="flex items-center justify-center p-7">
          <CopyRight/>
       </Box>
    </Box>
  )
}

export default Library
