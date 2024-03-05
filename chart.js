fetch('http://localhost:8080/getinformation')
//fetching data from database where db installed in localhost
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var dataSet = data;
        var svgWidth = 490;
        var svgHeight = 300;
        var barPadding = 15;
        var barWidth = (svgWidth / dataSet.length);
        
        // Rest of your D3.js code
        var svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
      
        var bars = svg.selectAll('rect').data(dataSet)
            .enter()
            .append('rect')
            .attr('x', function(d, i) {

                console.log(i*barWidth+"***for x-axis");
                return i * barWidth;
            }) 
            .attr('y', function(d) {
                return svgHeight - d.numberOfEmployee; // Use the actual value without scaling
            })
            .attr('width', barWidth - barPadding)
            .attr('height', function(d) {
                return d.numberOfEmployee; // Use the actual value without scaling
            });

        // Add text labels for company names
        var labels = svg.selectAll('text').data(dataSet)
            .enter()
            .append('text')
            .text(function(d) {
                console.log(d.companyName);
                return d.companyName+" "+d.numberOfEmployee;
            })
            .attr('x', function(d, i) {
                return i * barWidth + barWidth / 2; // Center the text within each bar
            })
            .attr('y', function(d, i) {
                return svgHeight-d.numberOfEmployee-2
            })
            .attr('text-anchor', 'middle')
            .attr('font-size', '9px')
            
    });
