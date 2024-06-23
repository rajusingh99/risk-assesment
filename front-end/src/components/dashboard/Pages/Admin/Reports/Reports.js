import { Box, Button, Grid, TextField } from '@mui/material'
import React,{useState} from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import ReportBarChart from './components/ReportBarChart'
import ReportPiChart from './components/ReportPichart'
import CustomBudget from './components/CustomBudget'
import SummaryInput from './components/SummaryInput'
import { Constant } from '../../../../constant/sidebarLinks'
import CopyRight from '../components/CopyRight'

const Reports = () => {
  const route={
    title:"Reports",
 }

 const [summary, setSummary] = useState(
  {
    risk_scenario:"",
    likelihood:"",
    custom_budget:""
});
  const handleSave =()=>{
    
  }

 const handleSummaryChange = (key,event) => {
  console.log(key,event.target.value,'fadsfa')
   setSummary((prevValue)=>({
    ...prevValue,
    [key]:event.target.value
   }))
 };

  return (
    <Box sx={{display:'flex'}} >
    <SideBar/>
      <Box  component="main" sx={{ flexGrow: 1 ,marginTop:"55px",p:5}}>
        <TopRoutes route={route}/>
          <Grid container  mt ={3} >
            <ReportBarChart/>
            <ReportPiChart/>
            <CustomBudget/>

            <Grid item xs={12} lg={4} className="border" sx={{borderRadius:'10px'}}>
              <SummaryInput />
                <Box className="m-3">
                  <TextField
                    id='risk_scenario'
                    type="text"
                    value={summary.risk_scenario}
                    placeholder='Enter Summary'
                    fullWidth
                    multiline
                    rows={6}
                    onChange={(e)=>handleSummaryChange("risk_scenario",e)}
                  />
                </Box>
            </Grid>
            
            <Grid item xs={12} lg={4} className="border" sx={{borderRadius:'10px'}}>
              <SummaryInput />
                <Box className="m-3">
                  <TextField
                    id='likelihood'
                    type="text"
                    value={summary.likelihood}
                    placeholder='Enter Summary'
                    fullWidth
                    multiline
                    rows={6}
                    onChange={(e)=> handleSummaryChange("likelihood",e)}
                  />
                </Box>
            </Grid>
            
            <Grid item xs={12} lg={4} className="border" sx={{borderRadius:'10px'}}>
              <SummaryInput />
                <Box className="m-3">
                  <TextField
                    id='custom_budget'
                    type="text"
                    value={summary.custom_budget}
                    placeholder='Enter Summary'
                    fullWidth
                    multiline
                    rows={6}
                    onChange={(e)=>handleSummaryChange("custom_budget",e)}
                  />
                </Box>
            </Grid>
          
          </Grid>
          <Box className="flex items-center justify-between gap-5 mt-5">
            <Box className="flex">
                <CopyRight/>
            </Box>
            
            <Box className="flex items-center justify-between gap-5 ">
              <Button variant="outlined" color="error" sx={{textTransform:'capitalize',}}>Cancel</Button>
              <Button 
                variant="contained" 
                aria-describedby={"simple-popover"} 
                onClick={handleSave} 
                sx={{ textTransform: "capitalize", backgroundColor: Constant.bgColor, ":hover": { backgroundColor: Constant.bgColor } }}
              >
                Save & Continue
              </Button>
            </Box>
        </Box>
      </Box>
  </Box>
  )
}

export default Reports
