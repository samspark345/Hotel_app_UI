import React, { Component } from 'react'
import './highlights.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { applyFilters, Gethotels, ModifySelectedFilters, ModifySelectedHotelFilters, resetHotelFilters } from '../redux/Actions/hotelActions';
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
import { useNavigate } from 'react-router-dom';
export class Hotels extends Component {

  
  

  constructor(props){
    super(props)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
    this.state = {
      filters : []
  
    }
  }


  componentDidMount(){
    this.props.actions.resetFilters()
  }

  componentWillUnmount(){
    // this.props.actions.resetFilters()
  }

  componentDidUpdate(){
    // this.props.actions.getHotels();
  }

  handleFilterChange(changedData){
    this.props.actions.modifySelectedHotelFilters(changedData)
  }
  
  handleFilterSubmit(){
    console.log(this.props)
    this.props.actions.applyFilters()
  }


  render() {
    // console.log(this.props)
    //minimmum price and date 
    let value = null
    console.log(this.props)
    return (
      <div className='highlightsPageContainer'>
        <div className='filterArea'>
          <div className='DropdownFilterArea'>
            {Object.keys(this.props.hotelFiltersOptions.dropdowns).map((labels) => {
              const optionToDisplay = this.props.hotelFiltersOptions.dropdowns[labels].length != 0? this.props.hotelFiltersOptions.dropdowns[labels] : ['first', 'second','third', 'fourth', 'fifth', 'sixth', 'seventh'];
              const singleSelect = labels === 'city' || labels === 'country' || labels === 'No_Of_Rooms'
              return (
                
                <MultiSelectDropdown className='filters' label={labels} options={optionToDisplay} onChange={this.handleFilterChange} singleSelect={singleSelect}/>
              )
            })}

            {/* <DatePicker label="Basic date picker" /> */}
            
          </div>
          <div style={{display:'flex', width: '100%', justifyContent: 'center'}}>
            <Button onClick={this.handleFilterSubmit}> Filter now </Button>
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
  return {
    hotelState: state.hotelState,
    hotelFiltersOptions: state.hotelFiltersOptions
  }
};
 
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getHotels : Gethotels,
    populateFilters : populateAllFIlters,
    modifySelectedHotelFilters : ModifySelectedHotelFilters,
    applyFilters : applyFilters,
    resetFilters : resetHotelFilters
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)