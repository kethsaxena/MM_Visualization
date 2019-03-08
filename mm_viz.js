
//read data 


// d3.csv("./circle_data.csv", function(d) {
//     return {
//       x : d.x,
//       y : d.y
//     };
//   }).then(function(data) {
//     console.log(data[0]);
//   });



// d3.csv("./circle_data.csv", function(d) {
    
//      matrix_data=d
//     };)


// d3.csv("./circle_data.csv", function(loadedRows) {
//     matrix_data = loadedRows;
//     doSomethingWithRows(); 
// });




 d3.csv("./circle_data.csv").then(function(matrix_data) {
    console.log(matrix_data);

    //SVG REAL ESTATE
const svg_width = 200;
const svg_height = 160;
const color ="white";


//D3 OBJECTS
const body =d3.select("body");
                
const svg =body
            .append("svg")
            .style("background", color)
            .attr("width", svg_width)
            .attr("height", svg_height);



svg
    .selectAll('circle')
    .data(matrix_data)
    .enter()
    .append('circle')
    .attr('cx',(d)=>d.x)
    .attr('cy',(d)=>d.y)
    .attr("r", 5)
    .style("fill", function() 
    {return "hsl(" + 240 + ","+Math.random() * 100+"%,"+Math.random() * 100+"%)";})
            




  });



  
 d3.csv("./circle_data.csv").then(function(matrix_data) {

    //SVG REAL ESTATE
const svg_width = 200;
const svg_height = 160;
const color ="white";


//D3 OBJECTS
const body =d3.select("body");
                
const svg =body
            .append("svg")
            .style("background", color)
            .attr("width", svg_width)
            .attr("height", svg_height);



svg
    .selectAll('circle')
    .data(matrix_data)
    .enter()
    .append('circle')
    .attr('cx',(d)=>d.x)
    .attr('cy',(d)=>d.y)
    .attr("r", 5)
    .style("fill", function() 
    {return "hsl(" + 240 + ","+Math.random() * 100+"%,"+Math.random() * 100+"%)";})
            




  });



  
  d3.csv("./circle_data.csv").then(function(matrix_data) {

    //SVG REAL ESTATE
const svg_width = 200;
const svg_height = 160;
const color ="white";


//D3 OBJECTS
const body =d3.select("body");
                
const svg =body
            .append("svg")
            .style("background", color)
            .attr("width", svg_width)
            .attr("height", svg_height);



svg
    .selectAll('circle')
    .data(matrix_data)
    .enter()
    .append('circle')
    .attr('cx',(d)=>d.x)
    .attr('cy',(d)=>d.y)
    .attr("r", 5)
    .style("fill", function() 
    {return "hsl(" + 240 + ","+Math.random() * 100+"%,"+Math.random() * 100+"%)";})
            




  });


// console.log(matrix_data)
// matrix_data = [{x:10,y:10},{x:30,y:10},{x:50,y:10},{x:70,y:10},{x:90,y:10},{x:110,y:10},{x:130,y:10},{x:150,y:10},{x:10,y:30},{x:30,y:30},{x:50,y:30},{x:70,y:30},{x:90,y:30},{x:110,y:30},{x:130,y:30},{x:150,y:30},{x:10,y:50},{x:30,y:50},{x:50,y:50},{x:70,y:50},{x:90,y:50},{x:110,y:50},{x:130,y:50},{x:150,y:50},{x:10,y:70},{x:30,y:70},{x:50,y:70},{x:70,y:70},{x:90,y:70},{x:110,y:70},{x:130,y:70},{x:150,y:70},{x:10,y:90},{x:30,y:90},{x:50,y:90},{x:70,y:90},{x:90,y:90},{x:110,y:90},{x:130,y:90},{x:150,y:90},{x:10,y:110},{x:30,y:110},{x:50,y:110},{x:70,y:110},{x:90,y:110},{x:110,y:110},{x:130,y:110},{x:150,y:110},{x:10,y:130},{x:30,y:130},{x:50,y:130},{x:70,y:130},{x:90,y:130},{x:110,y:130},{x:130,y:130},{x:150,y:130},{x:10,y:150},{x:30,y:150},{x:50,y:150},{x:70,y:150},{x:90,y:150},{x:110,y:150},{x:130,y:150},{x:150,y:150}
// ];
// function doSomethingWithRows(){
// matrix_data.push()};

// //SVG REAL ESTATE
// const svg_width = 350;
// const svg_height = 350;
// const color ="white";


// //D3 OBJECTS
// const body =d3.select("body");
                
// const svg =body
//             .append("svg")
//             .style("background", color)
//             .attr("width", svg_width)
//             .attr("height", svg_height);



// // svg
// //     .selectAll('circle')
// //     .data(matrix_data)
// //     .enter()
// //     .append('circle')
// //     .attr('cx',(d)=>d.x)
// //     .attr('cy',(d)=>d.y)
// //     .attr("r", 5)
// //     .style("fill", function() 
// //     {return "hsl(" + 240 + ","+Math.random() * 100+"%,"+Math.random() * 100+"%)";})
            