import { Grid } from '@mui/material'
import React from 'react'
import  {PieChart}  from '@mui/x-charts/PieChart';
import CardHeader from './CardHeader';

const ReportPiChart = () => {
    const data = [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ];
      
  return (
    <Grid item xs={12} lg={4} className='cursor-pointer border' sx={{borderRadius:'10px'}}>
        <CardHeader title={"Risk Scenarios by Likelihood"}/>
        <PieChart
        series={[
            {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
        ]}
        height={200}
        />
    </Grid>
  )
}

export default ReportPiChart
