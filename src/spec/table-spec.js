import tableChart from 'table';
import * as d3 from "d3";

   var draw = tableChart();	


	var data = [{"c1": 1, "c2": 2, "c3": 3},{"c1": 5, "c2": 6, "c3": 7}];
	data.columns = ["c1", "c2", "c3"];

	

describe("Test the table chart", function(){

	beforeEach(function(){

		var el = d3.select("html").append("body");

		var table = d3.select("body")
	    		.append("table")
	    		.attr("class", "table");
		
		draw(table, data);

	});

	afterEach(function(){
		d3.selectAll('table').remove();
	});


	describe('the table', function(){
		it('should be created', function() {


			expect(d3.selectAll('tr')._groups[0][0]).not.toBeNull();
			expect(d3.selectAll('tr')._groups[0][0]).toBeDefined();

			
		});

		it('should build a table with one row', function(){
			console.log(d3.selectAll('tbody').selectAll('tr')._groups[0]);
			expect(d3.select('tbody').selectAll('tr')._groups[0].length).toEqual(2);
		});
	});

});