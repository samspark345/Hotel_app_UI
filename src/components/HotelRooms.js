import React, { Component } from 'react'
import './highlights.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Gethotels, ModifySelectedFilters } from '../redux/Actions/hotelActions';
import HotelCards from './HotelCards';
import MultiSelectDropdown from './MultiSelectDropdown';
import TextField from '@mui/material/TextField';
import { populateAllFIlters } from '../redux/Actions/hotelFilterOptionsActions';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import DateForm from './DateForm';
import { red } from '@mui/material/colors';
import PriceForm from './PriceForm';
import { Button } from '@mui/material';
import { applyRoomFilters, GetRooms, ModifySelectedRoomFilters } from '../redux/Actions/hotelRoomActions';
import RoomCards from './RoomCards';
export class HotelRooms extends Component {

  
  

  constructor(props){
    super(props)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleFilterSelect = this.handleFilterSelect.bind(this)
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this)

    this.state = {
      dropdowns: {
        Room_Capacity: [1, 2, 3, 4, 5, 6],
        Views: ['City view', 'Mountain view', 'Sea View'],
        Amenities: ['room service', 'extendable', 'tv', 'a/c', 'fridge', 'wifi'],
      }
  
    }
  }

  componentDidMount(){
  }

  componentDidUpdate(){
    // this.props.actions.getHotels();
  }

  handleDateChange(changedData){
    this.props.actions.modifySelectedRoomFilters(changedData)
  }

  handleFilterSelect(selectedFilter){
    this.props.actions.modifySelectedRoomFilters(selectedFilter)
  }

  handleFilterSubmit(event){
    event.preventDefault()
    this.props.hotelRoomState.selectedFilters.Start_date && this.props.hotelRoomState.selectedFilters.End_date &&
    this.props.hotelRoomState.selectedFilters.Start_date < this.props.hotelRoomState.selectedFilters.End_date &&
    this.props.actions.applyRoomFilters()
  }


  render() {
    // console.log(this.props)
    //minimmum price and date 
    // this.props.hotelState.selectedHotelId.length > 0 &&
    let value = null
    console.log(this.props.hotelRoomState)
    console.log(this.props.hotelState.selectedHotelInfo)
    const error = this.props.hotelRoomState.selectedFilters.Start_date > this.props.hotelRoomState.selectedFilters.End_date
    || this.props.hotelRoomState.selectedFilters.Start_date.length < 1 || this.props.hotelRoomState.selectedFilters.End_date.length < 1
    return (
      <>
        {

          
        <div className='highlightsPageContainer'>
          <form className='filterArea' onSubmit={this.handleFilterSubmit}>
            <div className='DropdownFilterArea'>
              {Object.keys(this.state.dropdowns).map((labels) => {
                const optionToDisplay = this.state.dropdowns[labels].length != 0? this.state.dropdowns[labels] : ['first', 'second','third', 'fourth', 'fifth', 'sixth', 'seventh'];
                return (
                  
                  <MultiSelectDropdown className='filters' label={labels} options={optionToDisplay} onChange={this.handleFilterSelect} />
                )
              })}

              {/* <DatePicker label="Basic date picker" /> */}
              
            </div>
            <div style={{display:'flex', width: '100%', justifyContent: 'center'}}>
              <DateForm label={'Start_Date'} handleDateChange={this.handleDateChange} error={error} helperText={'You must select a valid start - end date range'}/>  
              <DateForm label={'End_Date'} handleDateChange={this.handleDateChange} error={error} helperText={''}/>
              <PriceForm />
            </div>
            <div style={{display:'flex', width: '100%', justifyContent: 'center'}}>
              <Button type='submit'> Filter now </Button>
            </div>
            
          </form>
          
          <div className='highlightVids'>

            {this.props.hotelRoomState?.rooms.map((room) => {
              // console.log(this.props)
              return (
                <RoomCards 
                room_no={room.room_number}
                chain_name={this.props.selectedHotelInfo.chain_name && this.props.selectedHotelInfo.chain_name} 
                country={this.props.selectedHotelInfo.country}
                city={this.props.selectedHotelInfo.city}
                price={room.price}
                extendable={room.extendable}
                room_service={room.room_service}
                tv={room.tv}
                fridge={room.fridge}
                view={room.view}
                air_conditioner={room.air_conditioner}
                capacity={room.capacity}
                wifi={room.wifi}
                address={this.props.selectedHotelInfo.address}
                className='hotelCard' />
              )
            })}
          </div>
        </div>}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hotelState: state.hotelState,
    selectedHotelInfo: state.hotelRoomState.selectedHotelInfo,
    hotelRoomState: state.hotelRoomState,
    hotelRoomsFiltersOptions: state.hotelRoomsFiltersOptions
  }
};
 
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getRooms : GetRooms,
    populateFilters : populateAllFIlters,
    modifySelectedRoomFilters : ModifySelectedRoomFilters,
    applyRoomFilters : applyRoomFilters
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelRooms)