import * as d3 from "d3";

export default function tableChart() {


    function buildTable(container, data) {

        // append the header body
        var thead = container.append("thead");
        var tbody = container.append("tbody");

        // append the header row
        thead.append("tr")
            .selectAll("th")
            .data(data.columns)
            .enter()
            .append("th")
            .text(function (column) { return column; });

        // create a row for each object in the data
        var rows = tbody.selectAll("tr")
            .data(data)
            .enter()
            .append("tr");

        //mapping function from data ro td based on columns
        function rowData(row) {
            return data.columns.map(function (column) {
                return { column: column, value: row[column] };
            });
        };

        // create a cell in each row for each column
        var cells = rows.selectAll("td")
            .data(rowData);
        //Add transitions and update funtionality
            cells.enter()
            .append("td")
            .text(function (d) { return d.value; });
    }

    return buildTable;


}