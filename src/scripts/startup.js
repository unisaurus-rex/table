import jquery from 'jquery';
import bootstrap from 'bootstrap-sass';
import tableChart from 'table';
import * as d3 from "d3";

//Create basic table with class of table for bootstrap
var table = d3.select("#drawtable")
    .append("table")
    .attr("class", "table");


 table.append("thead");
 table.append("tbody");

//add import function to variable for use
var drawTable = tableChart();

//call data and then return table with data inside
d3.csv("scripts/data/table-sample-data2.csv", function (error, data) {
  data.headers = data.columns;
  console.log(data);
  drawTable(d3.select("#drawtable"), data);
});

function swapData() {
  d3.csv("scripts/data/table-sample-data.csv", function (error, data) {
    data.headers = data.columns;
    console.log(data);
    drawTable(table, data);
  })
};

$("#swap").click(swapData);

window.d3 = d3;
