import React from 'react';
import { NavLink } from 'react-router-dom';
import {  Button } from '@mui/material';

import { useAuth } from 'hooks/useAuth';


const Navigation = () => {
  const { isLoggedIn } = useAuth();


  return (
    <div >
     
       
          <NavLink to="/" >
            <Button color="inherit">Home</Button>
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink to="/contacts" >
                <Button color="inherit">Contacts</Button>
              </NavLink>
              <NavLink to="/profile" >
                <Button color="inherit">Profile</Button>
              </NavLink>
            </>
          )}
     
  
    </div>
  );
};

export default Navigation;
