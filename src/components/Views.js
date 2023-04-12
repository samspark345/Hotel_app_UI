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
import { deleteSelectedBookings } from '../redux/Actions/EmployeeBookingsPageActions';
import { GetCityCapacityView, GetHotelCapacityView } from '../redux/Actions/ViewActions';

export class Views extends Component {

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
    cityCapacityColumnDefs : [
      { headerName: "City", field: "city", resizable: "true" },
      { headerName: "No Of Rooms", field: "num_of_rooms", resizable: "true" },
    ],

    hotelCapacityColumnDefs : [
      { headerName: "Hotel ID", field: "hotel_id", resizable: "true" },
      { headerName: "Total_Capacity", field: "total_capacity", resizable: "true" },
    ],

    rentingColumnDefs : [
      { headerName: "Renting ID", field: "rentingId", resizable: "true" },
      { headerName: "Start Date", field: "startDate", resizable: "true" },
      { headerName: "End Date", field: "endDate", resizable: "true" },
      { headerName: "Total Cost", field: "totalCost", resizable: "true" },
    ],

    cityCapacityViewRows: [],
    hotelCapacityViewRows: []
  }
  constructor(props){
    super(props)
    

  }

  componentDidMount(){
    this.props.actions.getHotelCapacityView();
    
  }

  componentDidUpdate(prevProps, prevState){
    // this.props.actions.getHotels();
    console.log(prevState, this.state)
    if (this.props.viewsState.hotelCapacityView !== prevProps.viewsState.hotelCapacityView){
      this.setState({
        ...this.state,
        hotelCapacityViewRows: this.props.viewsState.hotelCapacityView
      })
    }
    // if (this.props.viewsState.cityCapacityView !== this.state.cityCapacityViewRows){
    //   this.setState({
    //     ...this.state,
    //     cityCapacityView: this.props.viewsState.cityCapacityView
    //   })
    // }
    
  }

  //has to be a day.js object
  convertDates(date){
    const month = date.$M + 1 < 10 ? `0${date.$M + 1}` : date.$M + 1
    const day = date.$D < 10 ? `0${date.$D}` : date.$D
    const convertedValue = `${date.$y}\-${month}\-${day}`
    return convertedValue
  }

  

  render() {
    const customerName = 'js'
    // console.log(this.props)
    //minimmum price and date 
    return (
      <div className='highlightsPageContainer'>
          
          {/* <div style={{ height: "500px", width: "100%", padding: '100px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData gridLabel={'Available Rooms in Cities'} columnDefs ={this.state.cityCapacityColumnDefs} rowData={this.state.currentBooking} showDelete deleteRows={this.deleteBookings}/>
          </div> */}
          
          <div style={{ height: "500px", width: "100%", padding: '100px', alignSelf: 'center', justifyContent: 'center'}}>
            <GridwithData gridLabel={'Available Rooms in different Hotels'} columnDefs ={this.state.hotelCapacityColumnDefs} 
            rowData={this.state.hotelCapacityViewRows}/>
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
    viewsState: state.viewsState
  }
};
 
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getHotelCapacityView: GetHotelCapacityView,
    getCityCapacityView: GetCityCapacityView
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Views)