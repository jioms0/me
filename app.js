const express =require('express');
const app =  new express();
const axios = require('axios');
const bodyparser = require('body-parser');
const request = require('request');
const { response } = require('express');
app.use(bodyparser.urlencoded({extended:true}));
// var port = process.env.PORT || 8080;
app.set( 'port', ( process.env.PORT || 5000 ));


app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
var koki=[];
var home_data=[];
var menu_data=[];
var prdt_data=[];
var options = {
    headers:
    {
       
        'Fk-Affiliate-Token': '37aab18a3e8e48da95f50ee7e1a6d951',
        'Fk-Affiliate-Id': 'prasanta13',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
};




app.get("/", function(req, res){

       (async() => {
        const asyncExample = async() => {
          let data1, data2;
          try {
            data1 = await axios.get("https://affiliate-api.flipkart.net/affiliate/api/onlinesho41.json",options);
            data2 = await axios.get("https://affiliate-api.flipkart.net/affiliate/offers/v1/all/json",options);
        } catch (err) {
            console.log(err);
          }
          return [data1, data2];
        };
      
        //Save response on a variable
       const globalData = await asyncExample();
      
       menu_data= globalData[0].data.apiGroups.affiliate.apiListings;
       home_data= globalData[1].data.allOffersList;

    
     







       res.render("home", {home_Sldr : home_data, menu_dat: menu_data, testingg:"vanakkam"} );
      
      })();

      
     












   


});



app.get(/.*category*/, function(req, res){

    var urlpg= req.originalUrl.replace(/%3F/g, "?");
    urlpg = "https://affiliate-api.flipkart.net"+ urlpg;
    console.log("-------------------------------ok ---------------------"+ urlpg); 
    
    


      (async() => {
        const asyncExample = async() => {
          let data1, data2;
          try {
            data1 = await axios.get("https://affiliate-api.flipkart.net/affiliate/api/onlinesho41.json",options);
            data2 = await axios.get(urlpg,options);
        } catch (err) {
            console.log(err);
          }
          return [data1, data2];
        };
      
        //Save response on a variable
       const globalData = await asyncExample();

       menu_data= globalData[0].data.apiGroups.affiliate.apiListings;
       prdt_data= globalData[1].data.products;

 console.log("------------------------------- menu ---------------------"+ menu_data); 
   console.log("------------------------------- product ---------------------"+ prdt_data); 
          res.render("product", {menu_dat: menu_data, pr_data: []});
 //  res.render("product", {menu_dat: menu_data, pr_data: prdt_data})       
})();

});



app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });

// app.listen(port, function(){console.log("server running on port 8080")});
