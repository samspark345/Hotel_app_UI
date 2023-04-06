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
        Views: ['City view', 'Moutain view', 'Sea View'],
        Amenities: ['room service', 'extendable', 'tv', 'a/c', 'fridge', 'wifi'],
      }
  
    }
  }

  componentDidMount(){
    this.props.actions.getRooms();
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

  handleFilterSubmit(){
    this.props.actions.applyRoomFilters()
  }


  render() {
    // console.log(this.props)
    //minimmum price and date 
    // this.props.hotelState.selectedHotelId.length > 0 &&
    let value = null
    console.log(this.props.hotelRoomState)
    console.log(this.props.hotelState.selectedHotelInfo)
    return (
      <>
        {
        <div className='highlightsPageContainer'>
          <div className='filterArea'>
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
              <DateForm label={'Start_Date'} handleDateChange={this.handleDateChange}/>  <DateForm label={'End_Date'} handleDateChange={this.handleDateChange}/>
              <PriceForm />
            </div>
            <div style={{display:'flex', width: '100%', justifyContent: 'center'}}>
              <Button onClick={this.handleFilterSubmit}> Filter now </Button>
            </div>
            
          </div>
          
          <div className='highlightVids'>

            {this.props.hotelRoomState?.rooms.map((room) => {
              // console.log(this.props)
              return (
                <RoomCards 
                room_no={room.room_number}
                chain_name={this.props.selectedHotelInfo.chain_name && this.props.selectedHotelInfo.chain_name} 
                country={this.props.selectedHotelInfo.country}
                city={this.props.selectedHotelInfo.city}
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