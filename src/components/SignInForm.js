import React, { useState } from "react";
import {
  TextField,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { SignUp } from "../redux/Actions/AuthenticateActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SignInForm = () => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    email: "",
    password: "", // default area code
  });

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formState.password != formState.confirmPassword){
      setFormState({
        ...formState,
        confirmPassword: '',
      });
    }else{
      dispatch(SignUp(formState))
    }
    console.log(event)
    console.log(formState);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
      <TextField
        required
        name="email"
        label="Email"
        type="email"
        value={formState.email}
        onChange={handleChange}
      />
      <TextField
        required
        name="password"
        label="Password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />

      <Button variant="contained" color="primary" type="submit">
        Sign in
      </Button>
    </form>
  );
};

export default SignInForm;





