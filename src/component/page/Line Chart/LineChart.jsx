import React from 'react'
import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line'
import Line from './Line';
import TextHeader from '../../TextHeader/TextHeader';


const LineChart = () => {
// const theme = useTheme();

  return (
    <Box sx={{height:"77vh"}}>
    <TextHeader title="Line Chart" subTitle="Simple Line Chart" />
    
  <Line />
    </Box>
  )
}

export default LineChart
