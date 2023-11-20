import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { logOut } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  return (
    <Box padding={3}>
      {isLoggedIn && (
        <Box>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <Button
            component={NavLink}
            to="/login"
            variant="outlined"
            sx={{ color: 'red', borderColor: 'white' }}
            onClick={() => dispatch(logOut())}
          >
            Log out
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default UserMenu;
