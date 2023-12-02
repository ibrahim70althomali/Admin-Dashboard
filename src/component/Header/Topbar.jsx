import { Box, IconButton, Stack, Toolbar, styled } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Barsearch from "./Barsearch";

import Icons from './Icons';




const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const TopBar = ({ handleDrawerOpen, open , setMode}) => {
  return (
    <AppBar position="fixed"
      // @ts-ignore
      open={open}
      
      >
      <Toolbar>
       
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
      
        <MenuIcon />
        </IconButton>
       
   
   {/*search  */}
    <Barsearch/>
   {/*search  */}
    
    
  <Box flexGrow={1} />
    {/* الايكون الي في اليسار */}
    
    <Icons setMode={setMode} />
     
     </Toolbar>
    </AppBar>

  )
}

export default TopBar
