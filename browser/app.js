import React from 'react'
import ReactDom from 'react-dom'
import Main from './components/Main'


ReactDom.render(<Main />, document.getElementById('app'))

import * as d3 from 'd3'

console.log('version', d3.version)

// const   svgRef = d3.select("svg")
//     .attr("width", 500)
//     .attr("height", 300)

// d3.selectAll("circle")
//     .attr("fill", "red")
//     .attr("stroke", "yellow")
//     // .attr("r", (d,i)=>{
//     //     //return i
//     // })

// d3.select("text")
//     .text(["text"])
//     .append("text")
//         .text(["also text"])


// const arr = [20, 14, 32, 8, 16, 2];

// console.log('max', d3.max(arr))
// console.log('extent', d3.extent(arr))
// console.log('min', d3.min(arr))
// console.log('mean', d3.mean(arr))
// console.log('sum', d3.sum(arr))


// const arr2 = [1,3,5,7]

// console.log('merge', d3.merge([arr, arr2]))
// console.log('ticks', d3.ticks(0,10,2))
// console.log('tickStep', d3.tickStep(0,10,2))

// const arr3=[{name: "alfred", age:5}, {name: "James", age: 7}]

// console.log('max arr3', d3.max(arr3, (d,i)=>{
//     return d.age
// }))


// var tweets = [
// 	{user: 'John', topic: 'technology', numberOfTweets: 10},
// 	{user: 'John', topic: 'politics', numberOfTweets: 30},
// 	{user: 'Jack', topic: 'technology', numberOfTweets: 20},
// 	{user: 'John', topic: 'entertainment', numberOfTweets: 5},
// 	{user: 'Jack', topic: 'politics', numberOfTweets: 10}
// ];

// const nested = d3.nest()
//     .key((d)=>{
//         return d.user
//     })
//     .entries(tweets)

// console.log('nesteed', nested)


// var data = [10, 20, 30, 40, 50];

// const circles = d3.select("svg")
//     .selectAll("cirlces")
//     .data(data)

// circles.attr("fill", "red")

// circles.exit().remove()

// circles.enter()
//     .append("circle")
//     .merge(circles)
//     .attr("fill", "green")
//     .attr("r", "20")

// console.log(circles)


// var data = [10, 15, 25, 120, 500, 980, 1200];

// // Create yScale
// var yScale = d3.scaleLinear()
//                .domain([10, 1200])
//                .range(["yellow", "blue"])
//                .interpolate(d3.interpolateHcl);

// d3.select("svg")
//   .attr("style", "border: 1px solid")
//   .selectAll("rect")
//   .data(data)
//   .enter()
//   .append("rect")
//     .attr("width", 30)
//     .attr("height", 200)
//     .attr("x", function(d, i) { return i * 30; })
//     .attr("y", 300)
//     .style("fill", (d,i)=>{
//         return yScale(d)
//     })
//     .style("stroke", "black")
//     .style("stroke-width", "1px")
//     .style("opacity", .25);


// var svgContainer = d3.select("body")
// .append("svg")
//   .attr("width", 500)
//   .attr("height", 400)
//   .style("padding", "10px")
//   .style("border", "1px solid");

// var xScale = d3.scaleLinear()
//   .domain([0, 100])
//   .range([0, 500]);

// var xAxis = d3.axisBottom(xScale)
//     .ticks(5)
//     .tickPadding(10)
//     .tickFormat(function(d) { return d + "%"; });

// svgContainer.append("g")
//   .call(xAxis);

// // To place the axis at the bottom of the container

// svgContainer.append("g")
//   .attr("transform", function() {
//     return "translate(" + 0 + "," + 390 + ")"
//   })
//   .call(xAxis)


// d3.select('div')
//     .style("width", "100px")
//     .style("height", "100px")
//     .style("position", "absolute")
//     .style("background-color", "red")
//     .transition()
//     .ease(d3.easeBounceInOut)
//     .delay(1000)
//     .duration(2000)
//     .style("left", "400px")
//     .style("background-color", "blue");
//   d3.select("div")
//   .transition() // <-
//     .style("width", "100px")
//     .style("height", "100px")
//     .style("background-color", "red");


// var width = 500;
// var height = 500;
// var margin = 25;
// var axisLength = width - 2 * margin;

// var data1 = [
//   {x: 0, y: 4},
//   {x: 1, y: 9},
//   {x: 2, y: 6},
//   {x: 4, y: 5},
//   {x: 6, y: 7},
//   {x: 7, y: 3},
//   {x: 9, y: 2}
// ];

// var data2 = [
//   {x: 0, y: 3},
//   {x: 2, y: 7},
//   {x: 3, y: 4},
//   {x: 4, y: 3},
//   {x: 6, y: 3},
//   {x: 8, y: 4},
//   {x: 9, y: 1}
// ];

// var svgContainer = d3.select("div")
//   .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("border", "1px solid");

// var xScale = d3.scaleLinear()
//     .domain([0, 10])
//     .range([0, axisLength]);

// var yScale = d3.scaleLinear()
//     .domain([10, 0])
//     .range([0, axisLength]);

// var xAxis = d3.axisBottom(xScale);
// var yAxis = d3.axisLeft(yScale);

// svgContainer.append("g")
//     .classed("x-axis", true)
//     .attr("transform", function() {
//       return "translate(" + margin + "," + (height - margin) + ")";
//     })
//     .call(xAxis);

// svgContainer.append("g")
//     .classed("y-axis", true)
//     .attr("transform", function() {
//       return "translate(" + margin + "," + margin + ")";
//     })

//     .call(yAxis);

// var line = d3.line()
//     .x(function(d) { return xScale(d.x); })
//     .y(function(d) { return yScale(d.y); })
//     .curve(d3.curveBasis);

// svgContainer.append("path")
//     .attr("d", line(data1))
//     .attr("fill", "none")
//     .attr("stroke", "red")
//     .attr("transform", function() {
//       return "translate(" + margin + "," + margin + ")";
//     });

// svgContainer.append("path")
//     .attr("d", line(data2))
//     .attr("fill", "none")
//     .attr("stroke", "blue")
//     .attr("transform", function() {
//       return "translate(" + margin + "," + margin + ")";
//     });



// var width = 500;
// var height = 500;
// var margin = 25;
// var axisLength = width - 2 * margin;
// var line = null;

// var data1 = [
//     { x: 0, y: 4 },
//     { x: 1, y: 9 },
//     { x: 2, y: 6 },
//     { x: 4, y: 5 },
//     { x: 6, y: 7 },
//     { x: 7, y: 3 },
//     { x: 9, y: 2 }
// ];

// var data2 = [
//     { x: 0, y: 3 },
//     { x: 2, y: 7 },
//     { x: 3, y: 4 },
//     { x: 4, y: 3 },
//     { x: 6, y: 3 },
//     { x: 8, y: 4 },
//     { x: 9, y: 1 }
// ];

// var curveTypeMap = {
//     linear: d3.curveLinear,
//     linearClosed: d3.curveLinearClosed,
//     basis: d3.curveBasis,
//     basisClosed: d3.curveBasisClosed,
//     cardinal: d3.curveCardinal,
//     cardinalClosed: d3.curveCardinalClosed,
//     step: d3.curveStep,
//     stepBefore: d3.curveStepBefore,
//     stepAfter: d3.curveStepAfter
// };

// var svgContainer = d3.select("div")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("border", "1px solid");

// var xScale = d3.scaleLinear()
//     .domain([0, 10])
//     .range([0, axisLength]);

// var yScale = d3.scaleLinear()
//     .domain([10, 0])
//     .range([0, axisLength]);

// var xAxis = d3.axisBottom(xScale);
// var yAxis = d3.axisLeft(yScale);

// svgContainer.append("g")
//     .classed("x-axis", true)
//     .attr("transform", function () {
//         return "translate(" + margin + "," + (height - margin) + ")";
//     })
//     .call(xAxis);

// svgContainer.append("g")
//     .classed("y-axis", true)
//     .attr("transform", function () {
//         return "translate(" + margin + "," + margin + ")";
//     })
//     .call(yAxis);

// function render(curveType) {
//     d3.selectAll("path.area1,path.area2").remove();

//     const area = d3.area()
//         .x(function (d) { return xScale(d.x); })
//         .y0(yScale(0))
//         .y1(function (d) { return yScale(d.y); })
//         .curve(curveTypeMap[curveType])

//     svgContainer.append("path")
//         .classed("area1", true)
//         .attr("d", area(data1))
//         .attr("fill", "#ffad99")
//         .attr("stroke", "red")
//         .attr("transform", function () {
//             return "translate(" + margin + "," + margin + ")";
//         });

//     svgContainer.append("path")
//         .classed("area2", true)
//         .attr("d", area(data2))
//         .attr("fill", "#b3d9ff")
//         .attr("stroke", "blue")
//         .attr("transform", function () {
//             return "translate(" + margin + "," + margin + ")";
//         });
// }

// //render("basis"); // Initial rendering

// function renderArc() {

//     const fullAngle = 1 * Math.PI
//     const arc1 = d3.arc()
//         .innerRadius(0)
//         .outerRadius(40)
//         .startAngle(2 * Math.PI)
//         .endAngle(fullAngle)

//     const arc = svgContainer.append("path")
//         .attr("d", arc1())
//         .attr("fill", "red")

//     arc.attr("transform", "translate(" + 200 + "," + 200 + ")");

// }

// // renderArc()

// function renderPieChart() {
//     var color = d3.scaleOrdinal(d3.schemeCategory10);

//     var data = [1, 2, 1, 5, 6, 8, 10];

//     var arc = d3.arc()
//         .outerRadius(100)
//         .innerRadius(0);

//     var group = svgContainer.append("g")
//         .attr("transform", "translate(" + 200 + "," + 250 + ")")

//     var arcs = d3.pie()(data);

//     arcs.forEach(function (d, i) {
//         group.append("path")
//             //   .attr("d", arc(d))
//             .attr("fill", color(i))
//             .transition()
//             .duration(2000)
//             .attrTween("d", function () {
//                 const start = { startAngle: 0, endAngle: 0 }
//                 const interpolate = d3.interpolate(start, d)
//                 return function (t) {
//                     return arc(interpolate(t))
//                 }
//             })
//     })
// }

// renderPieChart()

//create the zoom behavior
const zoom = d3.zoom()
    .scaleExdtent([1,10])  //configures the scale extent that defines how much zoom is allowed
    .on("zoom", zoomed)

const svgG = d3.select("div")
    .append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .style("border", "1px solid")
        .call(zoom)    //call zoom
    .append('"g')    //append G elements to hold our circles

svgG.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
        .attr("r", r)
        .attr("transform", (d=>{
            return "stranslate("+d+")"
        }))