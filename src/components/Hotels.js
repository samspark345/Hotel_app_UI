import React, { Component } from 'react'
import './highlights.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Gethotels } from '../redux/Actions/hotelActions';
import HotelCards from './HotelCards';
import MultiSelectDropdown from './MultiSelectDropdown';
import { populateAllFIlters } from '../redux/Actions/hotelFilterOptionsActions';

export class Hotels extends Component {

  state = {
    filters : []

  }

  componentDidMount(){
    this.props.actions.getHotels();
  }

  componentDidUpdate(){
    // this.props.actions.getHotels();
  }


  render() {
    // console.log(this.props)
    //minimmum price and date 
    return (
      <div className='highlightsPageContainer'>
        <div className='filterArea'>
          {Object.keys(this.props.hotelFilters).map((labels) => {
            const optionToDisplay = this.props.hotelFilters[labels].length != 0? this.props.hotelFilters[labels] : ['first', 'second','third', 'fourth', 'fifth', 'sixth', 'seventh'];
            return (
              
              <MultiSelectDropdown className='filters' label={labels} options={optionToDisplay} />
            )
          })}
        </div>
        
        <div className='highlightVids'>

          {this.props.hotelState?.hotels.map((myHotel) => {
            // console.log(this.props)
            return (
              <HotelCards {...myHotel} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)