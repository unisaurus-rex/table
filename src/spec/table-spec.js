import tableChart from 'table';
import * as d3 from "d3";

  

describe("Test the table chart", function(){

	/******** VARIABLES ********/

	/** declare variables used for the following tests pull in the tableChart function 
        into the draw variable to be called later in the beforeEach section **/
	var draw = tableChart();	


	/** create dummy data with a columns property to mimic how the data is 
        structured. Create two objects to build out two rows. **/
	var data = [{"c1": 1, "c2": 2, "c3": 3},{"c1": 5, "c2": 6, "c3": 7}];
	data.columns = ["c1", "c2", "c3"];

	/** used to build out the table element, and call the tableChart() for each test **/
	beforeEach(function(){


		/** build out the HTML elements on the DOM first before calling the tableChart function **/
		var el = d3.select("body").append("div").attr("id", "drawtable");
		var table = d3.select("#drawtable")
    		.append("table")
    		.attr("class", "table");
		
		// from startup.js to make sure the table is built properly
		table.append("thead");
 		table.append("tbody");
		
		// call the table function
		draw(table, data);

	});

	afterEach(function(){

		//clear out the table element after each test
		d3.selectAll('table').remove();

	});


	it('should be created, not null and defined', function() {

		expect(d3.selectAll('tr')._groups[0][0]).not.toBeNull();
		expect(d3.selectAll('tr')._groups[0][0]).toBeDefined();

	});

	it('should build a table with two rows', function(){
			
		expect(d3.select('tbody').selectAll('tr')._groups[0].length).toEqual(2);
	});
	
	it('the tabl in #drawtable div should have the class of table', function() {

		expect(d3.select("#drawtable").select("table")._groups[0][0].className).toEqual("table");

	});

});