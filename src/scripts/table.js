import * as d3 from "d3";

export default function tableChart() {


    function buildTable(container, data) {

        // declare variables for Table Head and Body
        var thead = container.select("thead");
        var tbody = container.select("tbody");

        // append the header row
        var thRow = thead.selectAll("tr")
            .data([data.columns]);

        thRow
            .enter()
            .append("tr");


        var thCells = thRow.select("tr")
            .data(data.columns);

        thCells
            .enter()
            .append("th")
            .text(function (column) { return column; })
            .style("opacity", 0)
            .transition()
            .style("opacity", 1)
            .transition()
            .delay(1500);

        thCells
            .append("th")
            .text(function (column) { return column; })
            .style("opacity", 0)
            .transition()
            .style("opacity", 1)
            .transition()
            .delay(1500);

        // // create a row for each object in the data
        // var rows = tbody.selectAll("tr")
        //     .data(data);

        // rows
        //     .enter()
        //     .append("tr");

        // rows
        //     .append("tr");

        // //mapping function from data ro td based on columns
        // function rowData(row) {
        //     return data.columns.map(function (column) {
        //         return { column: column, value: row[column] };
        //     });
        // };

        // // create a cell in each row for each column
        // var cells = rows.selectAll("td")
        //     .data(rowData);
        // //Add data values and transitions to the enter funtionality
        // cells.enter()
        //     .append("td")
        //     .text(function (d) { return d.value; })
        //     .style("opacity", 0)
        //     .transition()
        //     .style("opacity", 1)
        //     .transition()
        //     .delay(1500);

        // //Add data values and transitions to the update funtionality
        // cells
        //     .append("td")
        //     .text(function (d) { return d.value; })
        //     .style("opacity", 0)
        //     .transition()
        //     .delay(1500)
        //     .style("opacity", 1)
        //     .transition()
        //     .delay(1500);
    }

    return buildTable;


}