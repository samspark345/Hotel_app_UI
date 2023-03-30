import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './hotelCard.css'

export default function HotelCards({
    hotelName,
    hotelChainName, 
    city
}) {
  return (
    <div className='hotelCard'>
        <Card sx={{ maxWidth: 400, minWidth: 200 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {`${hotelName} hotel`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    City: {city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Chain_Name: {hotelChainName}
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
