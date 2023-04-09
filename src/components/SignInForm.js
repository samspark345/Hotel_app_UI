import React, { useEffect, useState } from "react";
import {
  TextField,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { AuthenticateCustomer, AuthenticateEmployee, SignUp } from "../redux/Actions/AuthenticateActions";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

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
  const userState = useSelector((state) => state.User)
  const navigate = useNavigate()

  const [formState, setFormState] = useState({
    email: "",
    user_type: "customer",
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

    formState.user_type === "customer"?   dispatch(AuthenticateCustomer(formState)) : dispatch(AuthenticateEmployee(formState))
    console.log(event)
    console.log(formState);
  };

  useEffect(() => {

    (userState.customerInfo != null  || userState.employeeInfo != null) && navigate('/hotels')
    
  }, [userState.customerInfo, userState.employeeInfo])

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

      <FormControl component="fieldset">
        <RadioGroup
          aria-label="user_type"
          name="user_type"
          value={formState.user_type}
          onChange={handleChange}
        >
          <FormControlLabel
            value="customer"
            control={<Radio />}
            label="Customer"
          />
          <FormControlLabel
            value="employee"
            control={<Radio />}
            label="Employee"
          />
        </RadioGroup>
      </FormControl>
      <div className="buttons" style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
        <Button variant="contained" color="primary" type="submit">
          Sign in
        </Button>
        
        <Link to='/signup'  style={{textDecoration: 'none'}} >
          <Button variant='contained' color="primary" style={{width: '100%'}}> Sign Up </Button>
        </Link>
      </div>

      <div>
        {userState.authenticateError && <Alert severity="error">invalid sign in credentials!</Alert>}
      </div>
      
    </form>
  );
};

export default SignInForm;





