import React from 'react'
import './css/logincss.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, TextField } from '@mui/material';

const Loginpage = () => {
  return (
    <div className='container'>
      <Card   variant='outlined'  sx={{minWidth:275,maxWidth:300,padding:3}}>
        <CardContent className='cardcontent' title="sign in" sx={{padding:2}}>
            <h3>Sign in </h3>
        <TextField  label="Email"  variant="filled" type="email" required />
        
        <TextField  label="password"  variant="filled" type="password" required />
        <Button variant="contained" type='submit' >Sign in</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Loginpage
