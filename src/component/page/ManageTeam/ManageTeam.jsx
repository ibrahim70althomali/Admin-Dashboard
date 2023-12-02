import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import  { rows } from "./data"
import { Box, Typography, useTheme } from '@mui/material'
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import TextHeader from '../../TextHeader/TextHeader';



const ManageTeam = () => {
  
  const theme = useTheme()
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, align: "center", headerAlign: "center", with: "33" },
    { field: 'name', headerName: 'Name', flex: 1, align: "center", headerAlign: "center" },
    { field: 'email', headerName: 'Email', flex: 1, align: "center", headerAlign: "center" },
    { field: 'age', headerName: 'Age', flex: 1, align: "center", headerAlign: "center" },
    { field: 'phone', headerName: 'Phone', flex: 1, align: "center", headerAlign: "center" },
    { field: 'access', headerName: 'Access', flex: 1, align: "center", headerAlign: "center",
    renderCell:({row: {access} }) =>
     {
     return(
        <Box sx={{
          p: "5px",
          width: "99px",
          borderRadius: "3px",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor:
          access === "Admin"
            ? theme.palette.info.light
            : access === "Manager"
            ? theme.palette.secondary.dark
            : "#3da58a",
        }} >

       {access==="Admin"&&(<AdminPanelSettingsOutlined sx={{ color:"#fff"}}fontSize="small"/>)}
       {access==="Manager"&&(<SecurityOutlined sx={{ color: "#fff" }} fontSize="small"/>)}
       {access==="User"&&(<LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />)}

        
       <Typography variant="body1" sx={{fontSize:"14px", color:"#fff"}}> {access}</Typography>
      </Box>
  
     ) 
    }
     },
  
  
  ];


  
  
  return (
    <Box sx={{ height: 600, width: '100%',mx:"auto" }}>
      <TextHeader title={"TEAM"} subTitle={"Managing the Team Members"}/>
    <DataGrid rows={rows} 
     // @ts-ignore
    columns={columns} />
  </Box>
  )
}

export default ManageTeam
