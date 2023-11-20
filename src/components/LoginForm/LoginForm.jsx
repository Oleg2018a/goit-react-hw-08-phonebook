import React from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from 'redux/auth/operations'
import { InputLabel, Input, Box, Button } from '@mui/material';

const LoginForm = () => {
    const dispath = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.currentTarget
        dispath(
          logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        )
        console.log();
        form.reset()


    } 
  return (
    <Box
      sx={{
        padding: 6,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <InputLabel sx={{ padding: '8px' }} focused={true}>
          Email
          <Input sx={{ marginLeft: '8px' }} type="email" name="email" />
        </InputLabel>
        <InputLabel sx={{ padding: '8px', borderColor: 'red' }} focused={true}>
          Password
          <Input sx={{ marginLeft: '8px' }} type="password" name="password" />
        </InputLabel>
        <Button variant="contained" color="success" type="submit">
          {' '}
          Log In{' '}
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm