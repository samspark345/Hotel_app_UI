import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { GetHighlightVideos } from '../redux/Actions/highlightsActions';
import './highlights.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Video from './Video';

export class Highlights extends Component {

  componentDidMount(){
    this.props.actions.getHighlightVideos();
  }


  render() {
    return (
      <div className='highlightsPageContainer'>


        <div className='highlightVids'>
          {this.props.Highlightstate?.videos.map((videoData) => {
            // console.log(videoData)
            return (
              <Video {...videoData} />
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
    Highlightstate: state.highlightState
  }
};
 
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getHighlightVideos: GetHighlightVideos
  }, 
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Highlights)