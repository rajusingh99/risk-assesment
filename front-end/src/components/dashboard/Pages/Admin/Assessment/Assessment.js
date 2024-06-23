import { Box, Button, Divider, Grid, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import SideBar from '../../../sidebar'
import TopRoutes from '../TopRoutes/TopRoutes'
import SearchIcon from '@mui/icons-material/Search';
import { Constant } from '../../../../constant/sidebarLinks';
import AssessmentCard from './components/AssessmentCard';

const Assessment = () => {
  const route={
    title:"Assessment",
 }
  const [tabValue, setTabValue] = useState('likelihood'); 
  const [selectedScore, setSelectedScore] = useState({likelihood:'0',businessImpact:'0'});

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleScoreSelection = (key, score) => {
    setSelectedScore((prevScores) => ({
      ...prevScores,
      [key]: score
    }));
  };

  const handleSendToBackend = () => {
    console.log('Sending to backend:', selectedScore);
  };

  return (
    <Box sx={{display:'flex'}}>
      <SideBar/>
        <Box  component="main" sx={{ flexGrow: 1, p: 3 ,marginTop:"55px"}}>
         <TopRoutes route={route}/>
          <Box className="mt-10">
            <Grid container>
                <Grid item xs={12} lg={4} className="flex gap-1 border p-5" sx={{borderRadius:'10px'}}>
                  <Box >
                      <Typography className='flex items-start pb-5'>Risk Scenarios (1/7) </Typography>

                      <Box className="flex items-center justify-center mb-10">
                        <TextField
                          label="Search risk scenarios"
                          variant="outlined"
                          size="small"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          />
                          <Typography>Likelihood Score </Typography>
                          <Typography>Business Impact </Typography>
                      </Box>
                      <Box sx={{overflowY:'auto',maxHeight:'40vh'}}>
                          {
                            Constant.AssessmentData.map((item,index)=> <AssessmentCard item={item} index={index}/>)
                          }
                      </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} lg={8} className="flex gap-1 border p-5" sx={{borderRadius:'10px'}}>
                  <Box >
                    <Box className='flex min-w-64'>
                      <Typography>Risk Scenario - </Typography>
                      <Typography className='opacity-50'>Confidentiality of system ABC is compromised. </Typography>
                    </Box>

                    <Grid container >
                      <Grid item xs={12}>
                        <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary">
                          <Tab value="likelihood" label="Likelihood Score" />
                          <Tab value="businessImpact" label="Business Impact Score" />
                        </Tabs>
                        <Divider/>
                        <Box p={3} className="flex items-start flex-col">
                          {tabValue === 'likelihood' && (
                            <Typography variant="h6">Select Likelihood Score:</Typography>
                          )}
                          {tabValue === 'businessImpact' && (
                            <Typography variant="h6">Select Business Impact Score:</Typography>
                          )}
                          <Box display="flex" justifyContent="space-around" mt={2}>
                            {tabValue === 'likelihood' && (
                              <>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '1' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.likelihood === '1' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('likelihood','1')}>  Rare</Button>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '2' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.likelihood === '2' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('likelihood','2')} >  Periodic</Button>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '3' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.likelihood === '3' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('likelihood','3')}>  Frequent</Button>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '4' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.likelihood === '4' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('likelihood','4')}>  Often</Button>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '5' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.likelihood === '5' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('likelihood','5')}>  Always</Button>
                              </>
                            )}
                            {tabValue === 'businessImpact' && (
                              <>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '1' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.businessImpact === '1' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('businessImpact','1')}>  Very Low</Button>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '2' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.businessImpact === '2' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('businessImpact','2')}>  Low</Button>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '3' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.businessImpact === '3' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('businessImpact','3')}>  Medium</Button>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '4' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.businessImpact === '4' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('businessImpact','4')}>  High</Button>
                                <Button sx={{backgroundColor: selectedScore.likelihood === '5' ?"#DB7707" :"", ':hover':{backgroundColor:"#DB7707",color:'white'}}} variant={selectedScore.businessImpact === '5' ? 'contained' : 'outlined'}  onClick={() => handleScoreSelection('businessImpact','5')}>  Critical</Button>
                              </>
                            )}
                          </Box>
                         
                        </Box>
                      </Grid>
                   </Grid>
                  </Box>

              
                </Grid>
            </Grid>
          </Box>

        <Box className="flex items-end justify-end gap-5 mt-5">
          <Button variant="outlined" color="error" sx={{textTransform:'capitalize',}}>Cancel</Button>
          <Button 
            variant="contained" 
            aria-describedby={"simple-popover"} 
            onClick={handleSendToBackend} 
            sx={{ textTransform: "capitalize", backgroundColor: Constant.bgColor, ":hover": { backgroundColor: Constant.bgColor } }}
          >
            Save & Continue
          </Button>
        </Box>
        </Box>
    </Box>
  )
}

export default Assessment
