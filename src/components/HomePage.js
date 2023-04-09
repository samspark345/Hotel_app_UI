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
              <p> Please select an option?</p>
            </div>
            <div className='buttons'>
              <Link to='/signin' style={{textDecoration: 'none'}} >
                <Button variant="contained"> Login </Button>
              </Link>

              <Link to='/signup' style={{textDecoration: 'none'}} >
                <Button variant='contained'> Sign Up </Button>
              </Link>
            </div>
            
          </div>
        </div>

        

      </div>
        

    </section>
  )
}

export default HomePage