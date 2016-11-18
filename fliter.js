var fs = require("fs");
// Asynchronous read
fs.readFile('FoodFacts.csv', function (err, data) {
   if (err) {
      return console.error(err);
   }
   else
   {
   	data=data.toString();
   	var line=data.split("\n");
   	var heading=line[0].split(",");

      var c_i;
      var sug_i;
      var sal_i;
         for (var i = 0;i<=heading.length; i++) 
         {
            if(heading[i] == "countries")
               c_i = i;
            else if(heading[i] == 'sugars_100g')
               sug_i = i;
            else if(heading[i] == 'salt_100g')
               sal_i = i;
         }
         
         for (var j=0;j<=line.length - 1;j++) {
            var line_c = line[j].split(',');
            if(line_c[c_i].trim() == "Germany")
               console.log(j);
         }

        
         for (j =line.length - 1; j >= 0; j--) 
         {     var line_su=line[j].split(',');
               if (line_su[sug_i].trim()=="sugar") 
             console.log(""+j);
         }
         for (j =line.length - 1; j >= 0; j--) 
         {     var line_sa=line[j].split(',');
                if (line_sa[sal_i].trim()=="salt") 
             console.log(""+j);
         }
         
         // for ( j =sal_i.length - 1; j>= 0; j--) 
         //    console.log(""+sal_i);
         
         
         // for (var k=0; k<=c_i.length-1; k++) {
         //    var sum=0;
            sum[k]=sug_i[j]+sal_i[j];
         //    console.log(""+sum);
         //   }

         //    var plot = {countries:" ",sum:" "};

   }
         
      

});