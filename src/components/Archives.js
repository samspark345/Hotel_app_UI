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
import { GetCustomerBooking, GetCustomerRentsArchives } from '../redux/Actions/CustomerInfoActions';
import dayjs from 'dayjs';
import { GetAllCurrentCustomerBookings, GetCurrentCustomerBookings, GetCurrentCustomerRenting, GetPastCustomerBookings, GetPastCustomerRenting, createCustomerRenting, deleteSelectedBookings } from '../redux/Actions/EmployeeBookingsPageActions';
import { GetArchivedCustomerBookings, GetArchivedRentings } from '../redux/Actions/archivesActions';

export class Archives extends Component {

  // {
  //   headerName: 'Button Column',
  //   cellRenderer: () => {
  //     return (
  //       <Button variant='contained' onClick={() => console.log('Deleted')}>Delete</Button>
  //     );
  //   },
  // },
  // hide: true
  state = {
    filters : [],
    bookingColumnDefs : [
      { headerName: "Booking ID", field: "booking_id", resizable: "true", },
      { headerName: "Hotel ID", field: "hotel_id", resizable: "true", },
      {headerName: "Customer ID", field: "customer_id", resizable: "true", },
      { headerName: "Start Date", field: "booking_start_date", resizable: "true" },
      { headerName: "End Date", field: "booking_end_date", resizable: "true" },
      { headerName: "Hotel Name", field: "chain_name", resizable: "true" },
      { headerName: "Room Number", field: "room_number", resizable: "true" },
      
    ],

    rentingColumnDefs : [
      { headerName: "Renting ID", field: "renting_id", resizable: "true", },
      { headerName: "Hotel ID", field: "hotel_id", resizable: "true", },
      {headerName: "Customer ID", field: "customer_id", resizable: "true", },
      { headerName: "Start Date", field: "renting_start_date", resizable: "true" },
      { headerName: "End Date", field: "renting_end_date", resizable: "true" },
      { headerName: "Hotel Name", field: "chain_name", resizable: "true" },
      { headerName: "Room Number", field: "room_number", resizable: "true" },
    ],

    archivedBookings: [],
    archivedRentings: [],
  }
  constructor(props){
    super(props)
    this.populateBookings = this.populateBookings.bind(this)
    this.populateRentings = this.populateRentings.bind(this)
  }

  componentDidMount(){
    this.props.actions.getArchivedBooking();
    this.props.actions.getArchivedRenting();
    // this.populateBookings()
    // this.setState({
    //   ...this.state,
    //   pastBooking: this.props.employeeBookingsPageState.pastBookings,
    //   currentBooking: this.props.employeeBookingsPageState.currentBookings
    // })

  }

  componentDidUpdate(prevProps, prevState){
    // this.props.actions.getHotels();
    console.log(prevState, this.state)
    console.log(this.props)
    if ((this.props.archiveState.archivedBookings !== prevProps.archiveState.archivedBookings)){
      this.populateBookings()
    }

    if ((this.props.archiveState.archivedRentings !== prevProps.archiveState.archivedRentings)){
      this.populateRentings()
    }
    
  }



  //has to be a day.js object
  convertDates(date){
    const month = date.$M + 1 < 10 ? `0${date.$M + 1}` : date.$M + 1
    const day = date.$D < 10 ? `0${date.$D}` : date.$D
    const convertedValue = `${date.$y}\-${month}\-${day}`
    return convertedValue
  }


  populateBookings(){
    {
    
      let today = dayjs();
      let archivedBooking = []
      
      this.props.archiveState.archivedBookings.map((booking) =>{
        console.log(booking)
  
        let start_date = booking.booking_start_date?.split("T")[0]
        let end_date = booking.booking_end_date?.split("T")[0]
  
        booking.booking_start_date = start_date
        booking.booking_end_date = end_date
  
        archivedBooking.push(booking)
  
      })  

      this.setState({
        ...this.state,
        archivedBookings: archivedBooking,
      })
  
    }
  }

  populateRentings(){
    {
    
      let today = dayjs();
      let archivedRentings = []
  
      this.props.archiveState.archivedRentings.map((rent) =>{
        console.log(rent)
  
        let start_date = rent.renting_start_date?.split("T")[0]
        let end_date = rent.renting_end_date?.split("T")[0]
  
        rent.renting_start_date = start_date
        rent.renting_end_date = end_date
  
        archivedRentings.push(rent)
  
      })

      this.setState({
        ...this.state,
        archivedRentings: archivedRentings
      })
  
    }
  }

  render() {
    const customerName = 'js'
    // console.log(this.props)
    //minimmum price and date 
    return (
      <div className='highlightsPageContainer'>
          
          <div style={{ height: "500px", width: "100%", padding: '100px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData gridLabel={'Archived Bookings'} columnDefs ={this.state.bookingColumnDefs} rowData={this.state.archivedBookings}
             />
          </div>
          

          <div style={{ height: "500px", width: "100%", position: 'relative', padding: '200px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData gridLabel={'Archived Rentings'} columnDefs ={this.state.rentingColumnDefs} rowData={this.state.archivedRentings}/>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    hotelState: state.hotelState,
    hotelFilters: state.hotelFilters,
    archiveState: state.archiveState
  }
};
 
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getArchivedBooking: GetArchivedCustomerBookings,
    getArchivedRenting: GetArchivedRentings
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Archives)