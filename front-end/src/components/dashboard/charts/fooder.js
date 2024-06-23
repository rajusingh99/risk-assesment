import React from 'react';
import BarChart from './barchart';
import { Grid, Paper,Box } from '@mui/material';
import PieChart from './piechart';
import LineChart from './revenue';
import Orders from './orders';
import Users from '../DataGrid/users';
import SideBar from '../sidebar';

const FooderData = () => {

  const newLocal = <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
    <h2>Risk Dashboard</h2>
    <Grid container>
      <Grid xs='4' lg='4' sx={{ display: 'flex' }}>
        <Paper elevation={3}>
          <BarChart />
        </Paper>
      </Grid>
      <Grid xs='4' lg='4' sx={{ display: 'flex' }}>
        <Paper elevation={3}>
          <PieChart />
        </Paper>
      </Grid>
      <Grid xs='4' lg='4' sx={{ display: 'flex' }}>
        <Paper elevation={3}>
          <LineChart />
        </Paper>
      </Grid>
      <Grid xs='4' lg='4' sx={{ display: 'flex', marginTop: '30px' }}>
        <Paper elevation={3}>
          <Orders />
        </Paper>
      </Grid>
      <Grid sx={{ marginTop: '30px' }} xs='4' lg='8'>
        <Paper elevation={2} sx={{width:"92%"}}>
          <Users />
        </Paper>
      </Grid>
    </Grid>
  </Box>;
  return (
    <Box sx={{display:'flex'}}>
      <SideBar/>
      {newLocal}
    </Box>
  );
};

export default FooderData;
