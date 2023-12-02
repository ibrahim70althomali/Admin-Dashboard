import React from 'react'

import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, Stack, useTheme } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';



const Icons = ({setMode}) => {
  
  
//  ستخدم من مكتبه الثيم 
const theme= useTheme();
  
    return (
   
    <Stack
    direction={"row"}   
    >
     
    {/* مود دارك ولا   */}
    { theme.palette.mode === "light"?

    <IconButton onClick={() => {
   localStorage.setItem("crr",theme.palette.mode === "dark" ? "light":"dark" );
        setMode((prevMode) =>
        prevMode === 'light' ? 'dark' : 'light',
        );}} 
        color= "inherit" >
      <LightModeIcon   sx={{ color: yellow[500] }} />
    </IconButton> : 
      <IconButton onClick={() => {
          localStorage.setItem("crr",theme.palette.mode === "dark" ? "light":"dark"  ) ;
        setMode((prevMode) =>
        prevMode === 'light' ? 'dark' : 'light',
        );}} 
      color= "inherit" >
      <DarkModeIcon  sx={{ color: grey[500] }}  />
      </IconButton>
   }



   


    <IconButton color= "inherit" >
    <CircleNotificationsIcon />
    </IconButton>
   
    <IconButton color= "inherit" >
    <SettingsIcon />
    </IconButton>



    <IconButton color= "inherit" >
    <PersonIcon />
    </IconButton>
    
    
    
    </Stack> 


  )
}

export default Icons
