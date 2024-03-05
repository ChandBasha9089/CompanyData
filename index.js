var dataSet=[80,55,99,125,120,300,250,25];
var svgWidth=750;
var svgHeight=300;
var barPadding=10
var barWidth=(svgWidth/dataSet.length)
console.log(barWidth+"********Bar Width")

var svg=d3.select('svg')
.attr("width",svgWidth)
.attr("height",svgHeight)


console.log(barWidth-barPadding+"***********value")
var barChart=svg.selectAll('rect')
.data(dataSet)
.enter()
.append('rect')
.attr('y',function(d)
{
    return svgHeight-d;
})
.attr('height',function(d)
{
    return d
})
.attr("width",barWidth-barPadding)

.attr('transform',function(d,i)
{
    console.log(barWidth*i);
    var translate=[barWidth*i,0];
    console.log(translate);
    return "translate ("+translate+")";

    
    
});






var text=svg.selectAll('text')
.data(dataSet)
.enter()
.append('text')
.text(function(d){return d})
.attr('y',function(d,i)

{
    return svgHeight-d-1;

}

)
.attr('x',function(d,i)

{
    
    return barWidth*i


}

)
