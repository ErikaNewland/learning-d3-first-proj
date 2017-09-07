import React, { Component } from 'react';
import '../App.css';
import { select, selectAll } from 'd3-selection'
import {connect} from 'react-redux'
import {settingWorldMapData, setMaternalDeathData} from '../store'
import WorldMap from './WorldMap'
import maternalDeathData from '../data/maternalDeathData'


class App extends Component {
  
  componentDidMount() {
    this.props.settingWorldMapData()
    this.props.setMaternalDeathData(maternalDeathData)
  }

  render() {
    return (
      <WorldMap/>
    )
  }

}

const mapStateToProps = (state)=> {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    settingWorldMapData: function() {
      return dispatch(settingWorldMapData())
    },
    setMaternalDeathData: function(maternalDeathData) {
      return dispatch(setMaternalDeathData(maternalDeathData))
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App)