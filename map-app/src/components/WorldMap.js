import React, { Component } from 'react';
import { select, selectAll } from 'd3-selection'
import {connect} from 'react-redux'
import { feature } from 'topojson-client'
import '../App.css';


import { geoMercator, geoPath } from 'd3-geo'

class WorldMap extends Component {
  constructor(props) {
    super(props)
    this.renderMap = this.renderMap.bind(this)
  }

  renderMap() {
    const node = this.node
    const mapData = feature(this.props.worldMapData, this.props.worldMapData.objects.countries).features
    
    select(node)
      .append('g')
      .classed('countries', true)

    select('g')
      .selectAll('path')
      .data(mapData)
      .enter()
      .append('path')
      .classed('country', true)
      .attr("stroke", "black")
      .attr("fill", "white")
      .attr("strokeWidth", 0.5)


    selectAll('path')
      .each(function (d, i) {
        const projection = () => {
          return geoMercator()
            .scale(150)
            .translate([1000 / 1.75, 825 / 2])
        }

        const dAttr = () => {
          return geoPath().projection(projection())(d)
        }
  
        select(this)
          .attr("d", dAttr())
      })

  }

  filterMaternalDeathDataByYear(year) {
    const maternalDeathData = this.props.maternalDeathData.fact
    return maternalDeathData.filter(datapoint=>{
      return Number(datapoint.dims.YEAR) === year
    })
  }

  componentWillReceiveProps() {
    console.log('new props?')
    console.log('this.props', this.props)
    if(this.props.worldMapData.objects) {
      console.log('we are in the if statement')
      this.renderMap()
    }
  }

  // componentDidMount() {
  //   // setTimeout(()=>{
  //   //   this.renderMap()
  //   // }, 500)
  //   console.log("are you remounting?")
  //   if(this.props.worldMapData.objects) {
  //     this.renderMap()
  //   }
  // }


  render() {
    return (
      <svg ref={node => this.node = node} width={1000} height={600}>
      </svg>
    );
  }
}

const mapStateToProps=state=>{
  return {
    worldMapData: state.worldMapData,
    maternalDeathData: state.maternalDeathData
  }
}

export default connect(mapStateToProps)(WorldMap)



