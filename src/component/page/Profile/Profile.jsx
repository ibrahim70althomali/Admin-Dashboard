import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form"
import TextHeader from '../../TextHeader/TextHeader';


// لسته 
const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];
// عشان يتحقق من رقم الجوال والايميل اكواد جاهزه
const phoneRegExp =
 /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const regEmail =
 /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const Profile = () => {

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
   setOpen(true);
  };
 const handleClose = (event, reason) => {
   if (reason === 'clickaway') {
     return;
   }
   setOpen(false);
 };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  }=useForm()
  
  const onSubmit = (() => {
    handleClick()
  })

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      
      }}
      noValidate
      autoComplete="off"
    >

  <TextHeader title="CREATE USER" subTitle="Create a New User Profile" />

      <TextField
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="User"
        // helperText=""
        variant="filled"
        sx={{ flex: "1" }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Stack direction={"row"} sx={{ gap: 4 }} >

        <TextField
          // رساله الخطا
          error={Boolean(errors.firstName)}
          helperText=
          {Boolean(errors.firstName) ? "This field is required & min 3 character" : null}
          // من مكتبه 
          // 1.react-hook-form.com
          // 2.Apply validation
          {...register("firstName", { required: true, maxLength: 20, minLength: 3 })}
          sx={{ flex: "1" }}
          label="First Name"
          variant="filled"
        />

      <TextField
          error={Boolean(errors.lastName)}
          helperText=
          {Boolean(errors.lastName) ? "This field is required & min 3 character" : null}
          {...register("lastName", { required: true, maxLength: 20, minLength: 3 })}
          sx={{ flex: "1" }}
          label="lastName" variant="filled" />
      </Stack>


      <TextField
        error={Boolean(errors.ContactNumber)}
        helperText={
          Boolean(errors.ContactNumber) ? "Please provide a valid Phone number" : null}
        {...register("ContactNumber", { required: true, pattern: phoneRegExp })}
        sx={{ flex: "1" }}
        label="Contact Number" variant="filled" />



      <TextField
        error={Boolean(errors.email)}
        helperText=
        {Boolean(errors.email) ? "Please provide a valid email address" : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        sx={{ flex: "1" }}
        label="Email" variant="filled" />



      <TextField sx={{ flex: "1" }} label="Adress" variant="filled" />



      <Box sx={{ textAlign: "end"}}>

        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"    
        >
          Create New User
        </Button>

        {/* Snackbar */}        
      
      <Snackbar open={open}
      // موقع الرساله
        anchorOrigin={{ vertical: "top", horizontal:"right" }}
          autoHideDuration={6000}
          onClose={handleClose}>
          <Alert
           onClose={handleClose}
           severity="info"
           sx={{ width: '100%' }}>
           Account created successfully
          </Alert>
      </Snackbar>

      </Box>
    </Box>

  )
}

export default Profile
