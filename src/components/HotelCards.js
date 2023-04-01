import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './hotelCard.css'

export default function HotelCards({
    hotelid,
    star_rating,
    chain_name, 
    country,
    city,
    street_name,
    street_number,
    unit_number,
    email,
    phone_number
}) {
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
                Stars: {`${star_rating}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Country: {country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    City: {city}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Address: {`${street_number} ${street_name}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Unit number: {unit_number}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Email: {email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Phone: {phone_number}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </div>
  )
}
