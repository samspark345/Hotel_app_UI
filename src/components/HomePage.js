import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './homepage.css'
import FlatButton from 'material-ui/FlatButton'
import { RadioButton } from 'material-ui'
import { Button } from '@mui/material'

const HomePage = () => {
  return (
    <section className='homepage'>

      <div className='hero darken-page'>
        
        <video autoPlay loop muted playsInline className='homepageBgVid darken-page'>
            <source src={require('../images/hotel_video.mp4')}></source>
        </video>

        <div className='content'>
          <h1 className='welcomeText'>
            WELCOME TO HOTEL CHAIN HUB
          </h1>

          <div className='buttonArea'>
            <div className='userPrompt'>
              <p> Which user are you?</p>
            </div>
            <div className='buttons'>
              <Button variant="contained"> Customer </Button>
              <Button variant='contained'> User </Button>
            </div>
            
          </div>
        </div>

        

      </div>
        

    </section>
  )
}

export default HomePage