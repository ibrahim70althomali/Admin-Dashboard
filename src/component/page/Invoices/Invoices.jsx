import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import TextHeader from '../../TextHeader/TextHeader';

const Invoices = () => {
  return (
    <Box>
  
    <TextHeader title="INVOICES" subTitle="List of Invoice Balances" />


    <Box sx={{ height: 630, width:"1300px",  mx: "auto" }}>
    <DataGrid
      checkboxSelection
      slots={{
        toolbar: GridToolbar,
      }}
      rows={rows}
      // @ts-ignore
      columns={columns}
    />
  </Box>



</Box>

  )
}

export default Invoices
