import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch } from 'react-redux';
import { ModifySelectedFilters } from '../redux/Actions/hotelActions';
import { ModifySelectedRoomFilters } from '../redux/Actions/hotelRoomActions';


export default function PriceForm() {

    const [minPrice, setMinPrice] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState('');
    const dispatch = useDispatch();

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
        // console.log(event.target.value)
        
        dispatch(ModifySelectedRoomFilters({filterName: 'Min_price', filterValue: event.target.value}))
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
        // console.log(event.target.value)
        dispatch(ModifySelectedRoomFilters({filterName: 'Max_price', filterValue: event.target.value}))
    };
    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        style={{paddingLeft: '10px'}}
        noValidate
        autoComplete="off"
        >
            <FormControl fullWidth sx={{ m: 5 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Min Price</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Min_price"
                value={minPrice}
                error={minPrice < 0 && minPrice > maxPrice}
                type="number"
                inputProps={{min : 0}}
                onChange={handleMinPriceChange}
            />
            </FormControl>

            <FormControl fullWidth sx={{ m: 5 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Max Price</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Max_price"
                value={maxPrice}
                error={maxPrice < 0 && minPrice > maxPrice}
                inputProps={{min : 0}}
                type="number"
                onChange={handleMaxPriceChange}
            />
            </FormControl>
        </Box>
    );
}