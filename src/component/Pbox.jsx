import { Box, Typography } from '@mui/material'
import React from 'react'
import { styled} from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
const Pbox = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          
          {/* روتر */}
          <Outlet />
               
      </Box>
  )
}

export default Pbox
