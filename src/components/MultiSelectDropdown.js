import React, { useState } from "react";
import { Select, MenuItem, FormControl, ListItemIcon, ListItemText, InputLabel, Checkbox } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import './MultiSelectDropdown.css'
import { green } from "@mui/material/colors";
import styled from "@emotion/styled";


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      maxWidth: 300,
      width: '10%',
      backgroundColor: green
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
  }));


const WhiteBorderTextField = styled(MenuItem)`
    & label.Mui-focused {
        color: white;
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: white;
        }
    }
`;

const  MultiSelectDropdown = ({label, options}) => {
    console.log(label)
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    console.log(value)
  };

  return (
    <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-select-label">{label}</InputLabel>
        <Select
            labelId="mutiple-select-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
        >
        
            {options.map((option) => (
            <MenuItem key={option} value={option}>
                <ListItemIcon>
                <Checkbox checked={selected.indexOf(option) > -1} />
                </ListItemIcon>
                <ListItemText primary={option} />
            </MenuItem>
            ))}
        </Select>
    </FormControl>
    
  );
}

export default MultiSelectDropdown;
