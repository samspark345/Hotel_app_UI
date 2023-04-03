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
export class Hotels extends Component {

  
  state = {
    filters : []

  }

  constructor(props){
    super(props)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  componentDidMount(){
    this.props.actions.getHotels();
  }

  componentDidUpdate(){
    // this.props.actions.getHotels();
  }

  handleDateChange(changedData){
    this.props.actions.modifySelectedFilters(changedData)
  }


  render() {
    // console.log(this.props)
    //minimmum price and date 
    let value = null
    console.log(this.props.hotelState)
    return (
      <div className='highlightsPageContainer'>
        <div className='filterArea'>
          <div className='DropdownFilterArea'>
            {Object.keys(this.props.hotelFiltersOptions.dropdowns).map((labels) => {
              const optionToDisplay = this.props.hotelFiltersOptions.dropdowns[labels].length != 0? this.props.hotelFiltersOptions.dropdowns[labels] : ['first', 'second','third', 'fourth', 'fifth', 'sixth', 'seventh'];
              return (
                
                <MultiSelectDropdown className='filters' label={labels} options={optionToDisplay} />
              )
            })}

            {/* <DatePicker label="Basic date picker" /> */}
            
          </div>
          <div style={{display:'flex', width: '100%', justifyContent: 'center'}}>
            <DateForm label={'Start_Date'} handleDateChange={this.handleDateChange}/>  <DateForm label={'End_Date'} handleDateChange={this.handleDateChange}/>
            <PriceForm />
          </div>
          
        </div>
        
        <div className='highlightVids'>

          {this.props.hotelState?.hotels.map((myHotel) => {
            // console.log(this.props)
            return (
              <HotelCards {...myHotel} className='hotelCard' />
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    hotelState: state.hotelState,
    hotelFiltersOptions: state.hotelFiltersOptions
  }
};
 
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getHotels : Gethotels,
    populateFilters : populateAllFIlters,
    modifySelectedFilters : ModifySelectedFilters
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)