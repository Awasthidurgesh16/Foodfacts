var fs = require("fs");
// Asynchronous read
fs.readFile('FoodFacts.csv', function (err, data) {
   if (err) {
      return console.error(err);
   }
   else
   {
   	data=data.toString();
   	
   				console.log("the data is"+data.toString());

   			
   		}
    
});