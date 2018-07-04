/* New javascript file for D3 */
var dataUrl = "https://raw.githubusercontent.com/MQ-software-carpentry/D3-visualising-data/gh-pages/code/nations.json"
d3.json(dataUrl).then(function (nations) {

  console.log(nations);


  nations.map( function (n) {
    var year = n.year[n.years.length-1];
    var income = n.income[n.income.length-1];
    console.log(n.name, year, income);
  } );

} ).catch( function (err) {
  console.error(err);
} );


var numbers = [1, 2, 3, 5, 8, 13]
var json = JSON.stringify(fibs);
console.log(json);
