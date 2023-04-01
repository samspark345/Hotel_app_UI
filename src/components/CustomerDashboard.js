import React, { Component } from 'react'
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import './highlights.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Gethotels } from '../redux/Actions/hotelActions';
import { populateAllFIlters } from '../redux/Actions/hotelFilterOptionsActions';
import GridwithData from './GridwithData';
import { Button } from '@mui/material';

export class CustomerDashboard extends Component {

  // {
  //   headerName: 'Button Column',
  //   cellRenderer: () => {
  //     return (
  //       <Button variant='contained' onClick={() => console.log('Deleted')}>Delete</Button>
  //     );
  //   },
  // },

  state = {
    filters : [],
    bookingColumnDefs : [
      { headerName: "Booking ID", field: "bookingId", resizable: "true" },
      { headerName: "Start Date", field: "startDate", resizable: "true" },
      { headerName: "End Date", field: "endDate", resizable: "true" },
      { headerName: "Total Cost", field: "totalCost", resizable: "true" },
    ],

    rentingColumnDefs : [
      { headerName: "Renting ID", field: "rentingId", resizable: "true" },
      { headerName: "Start Date", field: "startDate", resizable: "true" },
      { headerName: "End Date", field: "endDate", resizable: "true" },
      { headerName: "Total Cost", field: "totalCost", resizable: "true" },
    ]
  }

  componentDidMount(){
    this.props.actions.getHotels();
  }

  componentDidUpdate(){
    // this.props.actions.getHotels();
  }


  render() {
    const bookings = [
      { bookingId: 1, startDate: '2023-04-01', endDate: '2023-04-05', totalCost: 500 },
      { bookingId: 2, startDate: '2023-05-10', endDate: '2023-05-20', totalCost: 800 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { bookingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      // ...more bookings
    ];

    const rentings = [
      { rentingId: 1, startDate: '2023-04-01', endDate: '2023-04-05', totalCost: 500 },
      { rentingId: 2, startDate: '2023-05-10', endDate: '2023-05-20', totalCost: 800 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      { rentingId: 3, startDate: '2023-06-15', endDate: '2023-06-20', totalCost: 300 },
      // ...more bookings
    ];

    const customerName = 'js'
    // console.log(this.props)
    //minimmum price and date 
    return (
      <div className='highlightsPageContainer'>
        
          <h1>Welcome, {customerName}!</h1>

          
          <div style={{ height: "500px", width: "100%", padding: '100px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData columnDefs ={this.state.bookingColumnDefs} rowData={bookings} showDelete/>
          </div>
          
          
          <div style={{ height: "500px", width: "100%", position: 'relative', padding: '200px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData columnDefs ={this.state.rentingColumnDefs} rowData={rentings}/>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    hotelState: state.hotelState,
    hotelFilters: state.hotelFilters
  }
};
 
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getHotels : Gethotels,
    populateFilters : populateAllFIlters
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDashboard)