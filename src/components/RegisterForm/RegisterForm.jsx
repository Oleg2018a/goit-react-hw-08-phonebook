import React from 'react'
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { InputLabel, Input,  Box, Button } from '@mui/material';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
          register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
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
        <h3> Register</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <InputLabel sx={{ padding: '8px' }} focused={true}>
            Username
            <Input sx={{ marginLeft: '8px' }} type="text" name="name" />
          </InputLabel>
          <InputLabel sx={{ padding: '8px' }} focused={true}>
            Email
            <Input sx={{ marginLeft: '8px' }} type="email" name="email" />
          </InputLabel>
          <InputLabel sx={{ padding: '8px' }} focused={true}>
            Password
            <Input sx={{ marginLeft: '8px' }} type="password" name="password" />
          </InputLabel>
          <Button  variant="contained" color="success" mt={8} type="submit">
            Register
          </Button>
        </form>
      </Box>
    );
}

export default RegisterForm