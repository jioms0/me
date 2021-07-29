const express =require('express');
const app =  new express();
const axios = require('axios');
const bodyparser = require('body-parser');
const request = require('request');
const { response } = require('express');
app.use(bodyparser.urlencoded({extended:true}));
var port = process.env.PORT || 8080;
app.use(express.static('public'));
app.set('view engine', 'ejs');

var home_data=[];
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
   
  
    const myData = function(hData) {
        home_data= hData;
         console.log(home_data);
         return home_data;
       }
    axios.get("https://affiliate-api.flipkart.net/affiliate/offers/v1/all/json",options)
    .then(function(response) { 
        const hData = response.data.allOffersList;
        return hData;
        
    })
    
    .catch(function(error){
        console.log(error)
    })
    .then(myData);
   





    res.render("home", {home_Sldr : home_data});

});







app.listen(port, function(){console.log("server running on port 3000")});
