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
import { useDispatch } from 'react-redux';
import { bookRoom } from '../redux/Actions/hotelRoomActions';

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
                <Button size="small" onClick={()=>{setOpenDialogue(true)}}>Book</Button>
                <Button size="small">Learn More</Button>
            </CardActions>

            <PopUpDialog title={'Are you sure?'} 
                content={'Do you wanna book this room?'}
                open={openDialogue}
                handleClose={()=> {setOpenDialogue(false)}}
                handleConfirm={()=> {
                    dispatch(bookRoom({
                        room_no,
                        
                    }))
                    setOpenDialogue(false)
                }}
            />
        </Card>
    </div>
  )
}
