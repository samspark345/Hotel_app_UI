import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './hotelCard.css'
import { PopUpDialog } from './PopUpDialog';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookRoom, bookRoomEmployee } from '../redux/Actions/hotelRoomActions';
import { TextField } from '@material-ui/core';

export default function RoomCards({
    room_no,
    chain_name, 
    country,
    city,
    price,
    extendable,
    room_service,
    tv,
    fridge,
    view,
    air_conditioner,
    capacity,
    wifi,
    address
}) {

    const [openDialogue, setOpenDialogue] = useState(false)
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.User)
    const [customerIdText, setCustomerIdText] = useState('')
  return (
    <div className='hotelCard'>
        <Card sx={{ maxWidth: 400, minWidth: 300 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                {`${chain_name} hotel`}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                Room Number: {`${room_no}`}
                </Typography>
                <Typography gutterBottom variant="h6" component="text.primary">
                Price: {`${price}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Country: {country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    City: {city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Room Service: {room_service? 'Yes': 'No'}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Extendable: {extendable? 'Yes': 'No'}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    TV: {tv? 'Available': 'Unavailable'}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Fridge: {fridge? 'Available': 'Unavailable'}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Available views: {`${view?.charAt(0).toUpperCase()}${view?.substring(1)}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Air Conditioner: {air_conditioner? 'Available': 'Unavailable'}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Wifi: {wifi? 'Available': 'Unavailable'}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Room Capacity: {capacity}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Address: {address}
                </Typography>


            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{setOpenDialogue(true)}}>{userState.customerInfo? 'Book': 'Rent'}</Button>
                <Button size="small">Learn More</Button>
            </CardActions>

            <PopUpDialog title={userState.customerInfo? 'Are you sure?' : 'please type customer Id'} 
                content={userState.customerInfo? 'Do you wanna book this room?':
                 <TextField 
                    value={customerIdText}
                    onChange={(event) => {
                        setCustomerIdText(event.target.value)
                    }}
                 />}
                open={openDialogue}
                handleClose={()=> {setOpenDialogue(false)}}
                handleConfirm={()=> {
                    userState.customerInfo?
                    dispatch(bookRoom({
                        room_no,
                        
                    })):

                    dispatch(bookRoomEmployee({
                        room_no,
                        customer_id: customerIdText
                    }))
                    setOpenDialogue(false)
                }}
            />
        </Card>
    </div>
  )
}
