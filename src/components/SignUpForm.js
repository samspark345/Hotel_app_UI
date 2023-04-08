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

const SignUpForm = () => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    address_country: "",
    address_city: "",
    address_street_name: "",
    address_street_number: "",
    address_unit_number: "",
    ssn_sin: "",
    password: "",
    confirmPassword: "",
    area_code: "1", // default area code
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
        name="first_name"
        label="First Name"
        value={formState.first_name}
        onChange={handleChange}
      />
      <TextField
        required
        name="last_name"
        label="Last Name"
        value={formState.last_name}
        onChange={handleChange}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="area-code-label">Area Code</InputLabel>
        <Select
          labelId="area-code-label"
          id="area-code-select"
          value={formState.area_code}
          onChange={handleChange}
          name="area_code"
        >
          <MenuItem value={"1"}>+1</MenuItem>
          <MenuItem value={"52"}>+52</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        name="phone_number"
        label="Phone Number"
        value={formState.phone_number}
        onChange={handleChange}
      />
      <TextField
        required
        name="email"
        label="Email"
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

      <TextField
        required
        name="confirmPassword"
        label="ConfirmPassword"
        type="password"
        value={formState.confirmPassword}
        error={formState.confirmPassword != formState.password}
        onChange={handleChange}
      />
      <TextField
        required
        name="address_country"
        label="Country"
        value={formState.address_country}
        onChange={handleChange}
      />
      <TextField
        required
        name="address_city"
        label="City"
        value={formState.address_city}
        onChange={handleChange}
      />
      <TextField
        required
        name="address_street_name"
        label="Street Name"
        value={formState.address_street_name}
        onChange={handleChange}
      />

      <TextField
        required
        name="address_street_number"
        label="Street Number"
        value={formState.address_street_number}
        onChange={handleChange}
      />
      <TextField
        name="address_unit_number"
        label="Unit Number"
        value={formState.address_unit_number}
        onChange={handleChange}
      />
      <TextField
        required
        name="ssn_sin"
        label="SSN/SIN"
        value={formState.ssn_sin}
        onChange={handleChange}
      />
      
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SignUpForm;





