import React, { Component } from 'react'
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { GetCustomerProfile } from '../redux/Actions/CustomerInfoActions';
import { populateAllFIlters } from '../redux/Actions/hotelFilterOptionsActions';
import './CustomerProfile.css';
import { TextField } from '@material-ui/core';

export class CustomerProfile extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    
        // Second boolean value to determine if field is editable
        this.state = {
          customerProfile:{
            First_Name: ['', true],
            Last_Name: ['', true],
            Email: ['', true],
            Phone: ['testing', true],
            Street_Name: ['', true],
            Street_Number: ['', true],
            Unit_Number: ['', true],
            City: ['', true],
            Country: ['', true],
            Password: ['', true],
            SSN: ['', false],
            Registration_Date: ['', false]
          }
        }
      }
    handleChange(event){
      this.setState({
        customerProfile:{
          ...this.state.customerProfile,
          [event.target.name]: [event.target.value, true]
        }
      })
    }
    handleSubmit(event){
      // Send update request to the db
    }
    componentDidMount(){
        this.props.actions.getCustomerProfile();
    }
    componentDidUpdate(){

    }
    render() {
        return(
          <>
            {
              <div className='customerProfileContainer'>
                {Object.keys(this.state.customerProfile).map((field) => {
                    var inputForm;
                    if(this.state.customerProfile[field][1]){
                        return <TextField name={field} label={field.replace("_", " ")}  value={this.state.customerProfile[field][0]} onChange={(event)=>this.handleChange(event)} />
                    }
                    else{
                        return <TextField name={field} label={field.replace("_", " ")} disabled='true' value={this.state.customerProfile[field][0]} />
                    }
                })}
              </div>
            }
          </>
        )
    }
}
const mapStateToProps = (state) => {
return {
        userState: state.User
    }
};

const mapDispatchToProps = (dispatch) => ({
actions: bindActionCreators({
    getCustomerProfile : GetCustomerProfile,
    populateFilters : populateAllFIlters,
}, 
dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile)