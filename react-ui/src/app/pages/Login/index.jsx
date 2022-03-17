import React from "react";
import LoginForm from "../../components/LoginForm";
import Grid from "@mui/material/Grid";

const Login = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <h4>Login</h4>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <LoginForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;