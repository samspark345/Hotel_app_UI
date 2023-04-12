import React, { Component } from 'react'
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { GetCustomerProfile, UpdateCustomerProfile } from '../redux/Actions/CustomerInfoActions';
import { populateAllFIlters } from '../redux/Actions/hotelFilterOptionsActions';
import './CustomerProfile.css';
import { InputLabel, Select, TextField } from '@material-ui/core';
import { Button, FormControl } from '@mui/material';
import MenuItem from '@material-ui/core/MenuItem';

export class CustomerProfile extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.populateState = this.populateState.bind(this)
        this.startState = {

        }
    
        // Second boolean value to determine if field is editable
        this.state = {
          customerProfile:{
            customer_id: "",
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
            area_code: ""
          }
        }
      }
    handleChange(event){
      this.setState({
        customerProfile:{
          ...this.state.customerProfile,
          [event.target.name]: event.target.value
        }
      })
    }
    handleSubmit(event){
      // Send update request to the db
      event.preventDefault();
      this.props.actions.updateCustomerProfile(this.state.customerProfile)

    }
    componentDidMount(){
        this.props.actions.getCustomerProfile();
        this.populateState()
        console.log(this.props.customerProfile)

    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.customerProfile.customerAccountInfo !=  this.props.customerProfile.customerAccountInfo ) {
          this.populateState()
        }
    }

    populateState(){
      this.setState({
        ...this.state,
        customerProfile: this.props.customerProfile.customerAccountInfo
      })
      this.startState = this.props.customerProfile.customerAccountInfo
    }

    render() {
        return(
          <>
            {/* {console.log(this.state)} */}
            {console.log(this.props)}
            {console.log(this.state)}
            {
              <div className='customerProfileContainer'>
                <form className onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
                  <TextField
                    required
                    name="first_name"
                    label="First Name"
                    value={this.state.customerProfile.first_name}
                    onChange={this.handleChange}
                  />
                  <TextField
                    required
                    name="last_name"
                    label="Last Name"
                    value={this.state.customerProfile.last_name}
                    onChange={this.handleChange}
                  />
                  <TextField
                    required
                    name="phone_number"
                    label="Phone Number"
                    inputProps={{pattern: "(1|52)-\\d{3}-\\d{3}-\\d{4}" }}
                    value={this.state.customerProfile.phone_number}
                    onChange={this.handleChange}
                  />
                  <TextField
                    required
                    name="email"
                    label="Email"
                    type="email"
                    value={this.state.customerProfile.email}
                    onChange={this.handleChange}
                  />
                  <TextField
                    required
                    name="password"
                    label="Password"
                    type="password"
                    inputProps={{pattern: ".{5,}" }}
                    value={this.state.customerProfile.password}
                    onChange={this.handleChange}
                  />

                  <TextField
                    required
                    name="address_country"
                    label="Country"
                    value={this.state.customerProfile.address_country}
                    onChange={this.handleChange}
                  />
                  <TextField
                    required
                    name="address_city"
                    label="City"
                    value={this.state.customerProfile.address_city}
                    onChange={this.handleChange}
                  />
                  <TextField
                    required
                    name="address_street_name"
                    label="Street Name"
                    value={this.state.customerProfile.address_street_name}
                    onChange={this.handleChange}
                  />

                  <TextField
                    required
                    name="address_street_number"
                    label="Street Number"
                    value={this.state.customerProfile.address_street_number}
                    onChange={this.handleChange}
                  />
                  <TextField
                    name="address_unit_number"
                    label="Unit Number"
                    value={this.state.customerProfile.address_unit_number}
                    onChange={this.handleChange}
                  />
                  <TextField
                    required
                    name="ssn_sin"
                    label="SSN/SIN"
                    disabled={true}
                    inputProps={{pattern: "[0-9]{9}" }}
                    value={this.state.customerProfile.ssn_sin}
                    onChange={this.handleChange}
                  />

                  <TextField
                    required
                    name="customer_id"
                    label="Customer ID"
                    disabled={true}
                    value={this.state.customerProfile.customer_id}
                    onChange={this.handleChange}
                  />

                  <TextField
                    required
                    name="registration_date"
                    label="Reg_date"
                    disabled={true}
                    value={this.state.customerProfile.registration_date? this.state.customerProfile.registration_date : ''}
                    onChange={this.handleChange}
                  />
                  
                  <div className="buttons" style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', paddingTop: '30px'}}>
                    <Button variant="contained" color="primary" type="submit" disabled={this.startState === this.state.customerProfile}>
                      Update
                    </Button>
                  </div>
                </form>

              </div>
            }
          </>
        )
    }
}
const mapStateToProps = (state) => {
return {
        userState: state.User,
        customerProfile: state.customerProfileState
    }
};

const mapDispatchToProps = (dispatch) => ({
actions: bindActionCreators({
    getCustomerProfile : GetCustomerProfile,
    populateFilters : populateAllFIlters,
    updateCustomerProfile : UpdateCustomerProfile
}, 
dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile)