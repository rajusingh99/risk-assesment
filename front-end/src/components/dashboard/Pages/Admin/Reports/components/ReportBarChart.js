import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js";
import CardHeader from './CardHeader';

Chart.register(CategoryScale);

const ReportBarChart = () => {
    const labels = ["Rs-1", "Rs-2", "Rs-3", "Rs-4", "Rs-5", "Rs-6"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Net Risk",
        data: [4600, 4200, 3700, 3200, 3000, 2500, 1400],
        backgroundColor: [
          "#F8836D",
          "#F8836D",
          "#F8836D",
          "#F8836D",
          "#F8836D",
          "#F8836D",
        ],
      },
    ],
  };
  return (
    <Grid item xs={12} lg={4} className='cursor-pointer border' sx={{borderRadius:'10px'}}>
        <CardHeader title={"Top 10 Risks Scenarios"}/>
        <Bar data={data} />

      <Typography className='flex items-center justify-center opacity-50 pb-2'>Risk Scenario</Typography>
    </Grid>
  )
}

export default ReportBarChart
