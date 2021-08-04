const express =require('express');
const app =  new express();
const axios = require('axios');
const bodyparser = require('body-parser');
const request = require('request');
const { response } = require('express');
app.use(bodyparser.urlencoded({extended:true}));
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
var koki=[];
var home_data=[];
var menu_data=[];
var prdt_data=[];
var mbl_data=[];
var today_off=[];
var options = {
    headers:
    {
       
        'Fk-Affiliate-Token': 'bd6298b80c164655bf12a15d405cf09f',
        'Fk-Affiliate-Id': 'onlinesho41',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
};




app.get("/", function(req, res){

       (async() => {
        const asyncExample = async() => {
          let data1, data2, data3, data4;
          try {
            data1 = await axios.get("https://affiliate-api.flipkart.net/affiliate/api/onlinesho41.json",options);
            data2 = await axios.get("https://affiliate-api.flipkart.net/affiliate/offers/v1/all/json",options);
            data3 = await axios.get(data1.data.apiGroups.affiliate.apiListings.furniture.availableVariants["v1.1.0"].get, options);
          //  data4 = await axios.get("https://affiliate-api.flipkart.net/affiliate/offers/v1/dotd/json", options);
           
        } catch (err) {
            console.log(err);
          }
          return [data1, data2, data3];
        };
      
        //Save response on a variable
       const globalData = await asyncExample();
      
       menu_data= globalData[0].data.apiGroups.affiliate.apiListings;
       home_data= globalData[1].data.allOffersList;
       mbl_data= globalData[2].data.products;
today_off=   globalData[1].data.allOffersList;
    
    // res.send(".........................."+mbl_data);







       res.render("home", {home_Sldr : home_data, menu_dat: menu_data, mbl_Sldr:mbl_data, today_offer: today_off} );
      
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


  
   res.render("product", {menu_dat: menu_data, pr_data: prdt_data})       
})();

});







app.get(/.*search*/, function(req, res){

  var urlpg= req.originalUrl.replace(/%3F/g, "?");
  urlpg = "https://affiliate-api.flipkart.net"+ urlpg;
  console.log("-------------------------------search ---------------------"+ urlpg); 
  
  



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



 res.render("product", {menu_dat: menu_data, pr_data: prdt_data})       
})();

});





app.listen(port, function(){console.log("server running on port 8080")});
