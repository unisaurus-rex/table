# table
---
This repo uses d3 to create data tables. The table.js file returns a function of <code>tableChart(container, data)</code> that can be imported and used to draw a table if given a container and data parameter for example:
```javascript
var drawTable = tableChart();
drawTable(d3.select("#mycontainer"), data);
```
The table will automatically use the columns as headers and render out the data in order accordingly and place them in HTML tables that are semantically valid. The table being built is agnostic of style, but will add the class of <code>.table</code> so you can easily apply custom styles or default to a frameworks table style, in our case, we use Bootstrap.

###Notes:
*When running http-server run it in the <code> src </code> folder for development. 
*When creating any new test while using d3 selections, make sure and instantiate/append the elements you intend to test or use within testing
*d3 V4 creates immutable objects, therefore if you need to update a nested object you will need to save a variable of that object to append any new elements/objects. Now using <code>.merge </code> with the immutable object (in a variable) will allow you to update the object. See example below:
```javascript
    var thing = thingUpdate.enter()
        .append("div")
        .merge(thingUpdate);
        ```