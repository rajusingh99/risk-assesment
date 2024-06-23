import { Box, Button, FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Constant } from '../../../../../constant/sidebarLinks';
import CheckIcon from '@mui/icons-material/Check';

const ScenarioCard = ({item,index}) => {
    const [checked,SetChecked] = useState(true);
   const handleChange =()=>{
    SetChecked((checked)=>!checked)
   }
  return (
    <Grid key={index} item xs={12} sx={{borderRadius:'5px', margin:"10px 0px",}} className='cursor-pointer border mb-10' >
       <Box className="flex" sx={{justifyContent:'space-between',minHeight:'10vh',backgroundColor:'#F3F8FE'}}>
          <Box className="flex items-center" sx={{gap:'10px',p:'10px'}}>
            <Typography> {item.risk_id}</Typography>
            <Box className="flex border p-1">
                <Typography> {item.tag_key}:</Typography>
                <span>{item.tag_value}</span>
            </Box>
          </Box>

          <Box sx={{gap:'15px',p:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography>Last Updated: 08 Jan, 2024</Typography>
            {item.draft ==false &&<FormGroup>
                <FormControlLabel sx={{color:checked? "#157A4E" : "",}} control={<Switch checked={checked}  onChange={handleChange} sx={{'& .MuiSwitch-switchBase.Mui-checked': { color: '#157A4E',},  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {  backgroundColor: '#157A4E',  },  }} />} label={checked ?"Enabled":"Disabled"}   />
            </FormGroup>}
            {
                item.draft ==true && 
                <Button variant="outlined" sx={{textTransform:'capitalize',gap:"10px"}}><CheckIcon/> draft</Button>
            }
            <MoreVertIcon sx={{color:Constant.bgColor}}/>
          </Box>
       </Box>

       <Box className="p-3 flex items-start">
            <Typography>{item.risk_description}</Typography>
       </Box>
    </Grid>
  )
}

export default ScenarioCard
