import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { CardHeader, Grid } from "@material-ui/core";
import AuthSnackbar from "../Snackbar/AuthSnackbar";

const Form = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  // create state variables for each input
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");

  //here we set user details to local storage
  const getSignUpCredentials = (obj) => {
    let result = JSON.parse(localStorage.getItem("user"));
    if (result !== null) {
      console.log(result, "asasas");
      const signupUserData = [...result, ...obj];
      localStorage.setItem("user", JSON.stringify(signupUserData));
      setAlert("SignUp successfully");
      setOpen(true);
      setIsLogin(true);
    } else {
      localStorage.setItem("user", JSON.stringify(obj));
      setAlert("SignUp successfully");
      setOpen(true);
      setIsLogin(true);
    }
  };
  const getLoginCedential = () => {
    let getUser = JSON.parse(localStorage.getItem("user"));
    const findUser = getUser?.filter(
      (u) => u.email === email && u.password === password
    );
    if (findUser.length === 0) {
      setAlert("Check you details");
      setOpen(true);
    } else {
      setAlert("Login successfully");
      
      setOpen(true);
      navigate("/expenses");
    }
  };
  const handleAuth = () => {
    const obj = [{ firstName, lastName, email, password }];
    !isLogin ? getSignUpCredentials(obj) : getLoginCedential();
  };
  const handleAuthView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Grid container className={classes.root} title="Login & SignUp">
      <CardHeader
        title={isLogin ? "Login" : "Sign Up"}
        className={classes.authHeader}
      />
      <AuthSnackbar open={open} setOpen={setOpen} title={alert} />
      {!isLogin && (
        <>
          <TextField
            label="First Name"
            variant="filled"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="filled"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </>
      )}
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleAuth}
        >
          {isLogin ? "  Login" : "signup"}
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleAuthView}
        >
          {!isLogin ? "  Login" : "signup"}
        </Button>
      </div>
    </Grid>
  );
};
export default Form;
