import tableChart from 'table';
import * as d3 from "d3";

describe("Test the table chart", function(){
	
	beforeEach(function(){
		var table = d3.select("#drawtable")
    		.append("table")
    		.attr("class", "table");

		var data = [{"c1": 1, "c2": 2, "c3": 3},{"c1": 5, "c2": 6, "c3": 7}];
		data.columns = ["c1", "c2", "c3"];
		var draw = tableChart();
		draw(table, data);
	});

	afterEach(function(){
		d3.selectAll('table').remove();
	});


	describe('the table', function(){
		it('should be created', function() {

			expect(getTable()).not.toBeNull();
		});

		it('should build a table with one row', function(){
			expect(getRows().length).toEqual(2);
		});
	});

	function getTable() {
		return d3.selectAll('tr');
	}

	function getRows() {
		return d3.selectAll('tr')._groups[0];
	}
});