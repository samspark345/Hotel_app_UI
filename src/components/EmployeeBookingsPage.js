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
import { GetCustomerBooking } from '../redux/Actions/CustomerInfoActions';
import dayjs from 'dayjs';
import { GetAllCurrentCustomerBookings, GetCurrentCustomerBookings, GetCurrentCustomerRenting, GetPastCustomerBookings, GetPastCustomerRenting, createCustomerRenting, deleteSelectedBookings } from '../redux/Actions/EmployeeBookingsPageActions';

export class BookingPage extends Component {

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
      { headerName: "Price", field: "price", resizable: "true" },
    ],

    rentingColumnDefs : [
      { headerName: "Renting ID", field: "renting_id", resizable: "true", },
      { headerName: "Hotel ID", field: "hotel_id", resizable: "true", },
      {headerName: "Customer ID", field: "customer_id", resizable: "true", },
      { headerName: "Start Date", field: "check_in_date", resizable: "true" },
      { headerName: "End Date", field: "check_out_date", resizable: "true" },
      { headerName: "Hotel Name", field: "chain_name", resizable: "true" },
      { headerName: "Room Number", field: "room_number", resizable: "true" },
      { headerName: "Price", field: "price", resizable: "true" },
    ],

    pastBooking: [],
    currentBooking: [],
    pastRentings: [],
    currentRentings: [],
    allBookings: []
  }
  constructor(props){
    super(props)
    
    this.sectionBookingByDates = this.sectionBookingByDates.bind(this)
    this.populateBookings = this.populateBookings.bind(this)
    this.deleteBookings = this.deleteBookings.bind(this)
    this.populateRentings = this.populateRentings.bind(this)
    this.createRentingsFromBookings = this.createRentingsFromBookings.bind(this)
  }

  componentDidMount(){
    this.props.actions.getCurrentBookings();
    this.props.actions.getPastBookings();
    this.props.actions.getCurrentRentings();
    this.props.actions.getPastRentings();
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
    if ((this.props.employeeBookingsPageState.pastBookings !== prevProps.employeeBookingsPageState.pastBookings) || (this.props.employeeBookingsPageState.currentBookings !== prevProps.employeeBookingsPageState.currentBookings)){
      this.populateBookings()
    }

    if ((this.props.employeeBookingsPageState.pastRentings !== prevProps.employeeBookingsPageState.pastRentings) ||
     (this.props.employeeBookingsPageState.currentRentings !== prevProps.employeeBookingsPageState.currentRentings)){
      this.populateRentings()
    }
    
  }

  deleteBookings(bookingsToDelete){
    this.props.actions.deleteBookings(bookingsToDelete)
    this.props.actions.getCurrentBookings()
  }

  createRentingsFromBookings(bookingsToRent){
    this.props.actions.createRentings(bookingsToRent)
    this.props.actions.getCurrentRentings()
  }

  //has to be a day.js object
  convertDates(date){
    const month = date.$M + 1 < 10 ? `0${date.$M + 1}` : date.$M + 1
    const day = date.$D < 10 ? `0${date.$D}` : date.$D
    const convertedValue = `${date.$y}\-${month}\-${day}`
    return convertedValue
  }

  sectionBookingByDates(){
    
    let today = dayjs();
    let currentBooking = []
    this.props.employeeBookingsPageState.bookings.map((booking) =>{
      console.log(booking)

      let start_date = booking.booking_start_date.split("T")[0]
      let end_date = booking.booking_end_date.split("T")[0]

      booking.booking_start_date = start_date
      booking.booking_end_date = end_date

      dayjs(this.convertDates(today)).diff(dayjs(start_date)) > 0 && currentBooking.push(booking)

    })
    this.setState({
      ...this.state,
      allBookings: this.props.employeeBookingsPageState.bookings,
      currentBooking: currentBooking
    })

  }

  populateBookings(){
    {
    
      let today = dayjs();
      let currentBooking = []
      let pastBooking = []
      this.props.employeeBookingsPageState.pastBookings.map((booking) =>{
        console.log(booking)
  
        let start_date = booking.booking_start_date.split("T")[0]
        let end_date = booking.booking_end_date.split("T")[0]
  
        booking.booking_start_date = start_date
        booking.booking_end_date = end_date
  
        pastBooking.push(booking)
  
      })
  
      this.props.employeeBookingsPageState.currentBookings.map((booking) =>{
        console.log(booking)
  
        let start_date = booking.booking_start_date.split("T")[0]
        let end_date = booking.booking_end_date.split("T")[0]
  
        booking.booking_start_date = start_date
        booking.booking_end_date = end_date
  
        !booking.checked_in && currentBooking.push(booking)
  
      })  

      this.setState({
        ...this.state,
        pastBooking: pastBooking,
        currentBooking: currentBooking
      })
  
    }
  }

  populateRentings(){
    {
    
      let today = dayjs();
      let currentRentings = []
      let pastRentings = []
      this.props.employeeBookingsPageState.pastRentings.map((rent) =>{
        console.log(rent)
  
        let start_date = rent.check_in_date?.split("T")[0]
        let end_date = rent.check_out_date?.split("T")[0]
  
        rent.check_in_date = start_date
        rent.check_out_date = end_date
  
        pastRentings.push(rent)
  
      })
  
      this.props.employeeBookingsPageState.currentRentings.map((rent) =>{
        console.log(rent)
  
        let start_date = rent.check_in_date?.split("T")[0]
        let end_date = rent.check_out_date?.split("T")[0]
  
        rent.check_in_date = start_date
        rent.check_out_date = end_date
  
        currentRentings.push(rent)
  
      })

      this.setState({
        ...this.state,
        pastRentings: pastRentings,
        currentRentings: currentRentings
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
            <GridwithData gridLabel={'All Customers Current Bookings'} columnDefs ={this.state.bookingColumnDefs} rowData={this.state.currentBooking}
             showDelete deleteRows={this.deleteBookings} makeRent={this.createRentingsFromBookings} />
          </div>
          
          
          <div style={{ height: "500px", width: "100%", position: 'relative', padding: '200px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData gridLabel={'All Customers Past Bookings'} columnDefs ={this.state.bookingColumnDefs} rowData={this.state.pastBooking}/>
          </div>

          <div style={{ height: "500px", width: "100%", position: 'relative', padding: '200px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData gridLabel={'All Customers Current Rentings'} columnDefs ={this.state.rentingColumnDefs} rowData={this.state.currentRentings}/>
          </div>

          <div style={{ height: "500px", width: "100%", position: 'relative', padding: '200px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData gridLabel={'All Customers past Rentings'} columnDefs ={this.state.rentingColumnDefs} rowData={this.state.pastRentings}/>
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
    employeeBookingsPageState: state.employeeBookingsPageState
  }
};
 
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getAllCustomerBooking: GetAllCurrentCustomerBookings,
    getCurrentBookings: GetCurrentCustomerBookings,
    getPastBookings: GetPastCustomerBookings,
    deleteBookings: deleteSelectedBookings,
    createRentings: createCustomerRenting,
    getPastRentings: GetPastCustomerRenting,
    getCurrentRentings: GetCurrentCustomerRenting
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage)