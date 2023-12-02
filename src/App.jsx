
import * as React from 'react';

import TopBar from './component/Header/Topbar';
import SidBox from './component/Header/SidBox';
import Pbox from './component/Pbox';

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from './theme';






export default function MiniDrawer() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [mode, setMode] = React.useState(
    localStorage.getItem("crr") ?
     localStorage.getItem("crr") 
     : " light" );
  
  
  
     const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <TopBar handleDrawerOpen={handleDrawerOpen} open={open} setMode={setMode} />
          <SidBox open={open} handleDrawerClose={handleDrawerClose} />
          <Pbox />
        </Box>
      </div>
    </ThemeProvider>
  );
}
