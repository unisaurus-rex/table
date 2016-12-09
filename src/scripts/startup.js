import jquery from 'jquery';
import bootstrap from 'bootstrap-sass';
import tableChart from 'table.js';
import * as d3 from "d3";

//Create basic table with class of table for bootstrap
var table = d3.select("#drawtable")
    .append("table")
    .attr("class", "table");

//add import function to variable for use
var drawTable = tableChart();

//call data and then return table with data inside
d3.csv("/scripts/data/table-sample-data.csv", function (error, data) {
    console.log(data.columns);
    drawTable(table, data);

});