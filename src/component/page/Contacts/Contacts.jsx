import { Box } from '@mui/material'
import { columns, rows } from './data'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import TextHeader from '../../TextHeader/TextHeader';




const Contacts = () => {  
  return (
    


    <Box sx={{ height: 600, width: '99%',mx:"auto" }}>
    <TextHeader title="CONTACTS" subTitle="List of Contacts for Future Reference" />

    <DataGrid rows={rows} 
  
  //  فلتر
  slots={{
   toolbar: GridToolbar,
  }}
    // @ts-ignore
    columns={columns} />
  </Box>
  )
}

export default Contacts
