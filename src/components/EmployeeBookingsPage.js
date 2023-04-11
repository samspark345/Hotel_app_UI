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
import { GetAllCurrentCustomerBookings, GetCurrentCustomerBookings, GetPastCustomerBookings, deleteSelectedBookings } from '../redux/Actions/EmployeeBookingsPageActions';

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
      { headerName: "Renting ID", field: "rentingId", resizable: "true" },
      { headerName: "Start Date", field: "startDate", resizable: "true" },
      { headerName: "End Date", field: "endDate", resizable: "true" },
      { headerName: "Total Cost", field: "totalCost", resizable: "true" },
    ],

    pastBooking: [],
    currentBooking: [],
    allBookings: []
  }
  constructor(props){
    super(props)
    
    this.sectionBookingByDates = this.sectionBookingByDates.bind(this)
    this.populateBookings = this.populateBookings.bind(this)
    this.deleteBookings = this.deleteBookings.bind(this)
  }

  componentDidMount(){
    this.props.actions.getCurrentBookings();
    this.props.actions.getPastBookings();
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
    if ((this.props.employeeBookingsPageState.pastBookings !== prevProps.employeeBookingsPageState.pastBookings) || (this.props.employeeBookingsPageState.currentBookings !== prevProps.employeeBookingsPageState.currentBookings)){
      this.populateBookings()
    }
    
  }

  deleteBookings(bookingsToDelete){
    this.props.actions.deleteBookings(bookingsToDelete)
    this.props.actions.getCurrentBookings()
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
  
        currentBooking.push(booking)
  
      })  

      this.setState({
        ...this.state,
        pastBooking: pastBooking,
        currentBooking: currentBooking
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
            <GridwithData gridLabel={'Current Bookings'} columnDefs ={this.state.bookingColumnDefs} rowData={this.state.currentBooking} showDelete deleteRows={this.deleteBookings}/>
          </div>
          
          
          <div style={{ height: "500px", width: "100%", position: 'relative', padding: '200px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData gridLabel={'Past Bookings'} columnDefs ={this.state.bookingColumnDefs} rowData={this.state.pastBooking}/>
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
    deleteBookings: deleteSelectedBookings
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage)