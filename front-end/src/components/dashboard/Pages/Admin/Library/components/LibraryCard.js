import React from 'react'
import { Box,Grid, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import { Constant } from '../../../../../constant/sidebarLinks';
import { Link } from 'react-router-dom';

const LibraryCard = ({item,index}) => {
  return (
   <Grid item xs={12} lg={6} key={index}>
    <Link to={item.path}>
        <Box sx={{display:'flex',flexDirection:'column', minHeight:'30vh',boxShadow:'initial',cursor:'pointer',border:'1px solid black',m:'10px',p:'20px',borderRadius:'10px'}}>
            <Box sx={{minHeight:'17vh'}}>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex',justifyContent:'space-between',gap:'20px'}} className="pb-5"> 
                        {item.icon}
                        <Typography component={'h3'} className="text-bold" sx={{color:Constant.bgColor,fontSize: 'bold'}}>{item.title}</Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
                
                <Box>
                    <Typography className='opacity-50 flex '>{item.description}</Typography>

                </Box>
            </Box>

            <Divider/>
            <Box className="flex items-center gap-2 pt-4">

               {item?.title =='Risk Scenario' && <>
                    <Typography className='opacity-50'>All Scenarios: </Typography> <span >40</span>
                    <Typography className='opacity-50'>Published: </Typography> <span >32</span>
                    <Typography className='opacity-50'>Disabled: </Typography> <span >3</span>
                    <Typography className='opacity-50'>Draft: </Typography> <span >5</span>
               </>
              }
            </Box>
        </Box> 
    </Link>
   </Grid>
  )
}

export default LibraryCard
