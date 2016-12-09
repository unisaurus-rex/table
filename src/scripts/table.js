import * as d3 from "d3";

export default function tableChart() {


    function buildTable(container, data) {
        console.log(container)

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

        // create a cell in each row for each column
        var cells = rows.selectAll("td")
            .data(function (row) {
                return data.columns.map(function (column) {
                    return { column: column, value: row[column] };
                });
            })
            .enter()
            .append("td")
            .text(function (d) { return d.value; });

    }

    return buildTable;


}