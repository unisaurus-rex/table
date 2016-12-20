# table
---
This repo uses d3 to create data tables. The table.js file returns a function of <code>tableChart(container, data)</code> that can be imported and used to draw a table if given a container and data parameter for example:

<code>var drawTable = tableChart();
drawTable(d3.select("#mycontainer"), data); </code>

The table will automatically use the columns as headers and render out the data in order accordingly and place them in HTML tables that are semantically valid. The table being built is agnostic of style, but will add the class of <code>.table</code> so you can easily apply custom styles or default to a frameworks table style, in our case, we use Bootstrap.

**Note:**
When running http-server explicitly set the path <code> './src' </code>. 
So the command should be: <code> http-server './src' </code> . 
We can fix this but for now this is how to get the project running in a browser.