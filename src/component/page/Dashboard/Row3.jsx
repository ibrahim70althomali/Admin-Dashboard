import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Pie from '../Pie Chart/Pie'
import Bar from '../BarChart/Bar';
import Geograph from "../Geography Chart/Geography"

const Row3 = () => {
  const theme = useTheme();

  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      
     
      <Paper sx={{flexGrow: 1,minWidth: "350px", width: "32%",borderRadius: "5px"}}>
      
      <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
      
      <Pie isDahboard ={true} />

      <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
      
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      
      
     
      <Paper sx={{flexGrow: 1,minWidth: "350px", width: "30%",borderRadius: "5px"  }}>
      <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>


     <Bar isDahboard ={true}/>
      </Paper>



      <Paper sx={{flexGrow: 1,minWidth: "350px", width: "33%",borderRadius: "5px"}}>  
      <Geograph isDashbord={true} />
      </Paper>

      
    </Stack>
  )
}

export default Row3
