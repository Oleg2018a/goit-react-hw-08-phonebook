import {  Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div >
      <Button
        component={NavLink}
        to="/register"
        variant="contained"
        color="success"
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        color="success"
      >
        Log In
      </Button>
    </div>
  );
};
