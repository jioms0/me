const express =require('express');
const app =  new express();
const axios = require('axios');
const bodyparser = require('body-parser');
const request = require('request');
const { response } = require('express');
const fs = require('fs');
const { json } = require('body-parser');
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


var whlmenudata;

setInterval(function(){ 
(async()=>{
  
  const menudataclc = async() => {
let menusdata, furnituredata, offerdata;
try{
  menusdata =  await axios.get("https://affiliate-api.flipkart.net/affiliate/api/onlinesho41.json",options);
  offerdata = await axios.get("https://affiliate-api.flipkart.net/affiliate/offers/v1/all/json",options);
  furnituredata = await axios.get(menusdata.data.apiGroups.affiliate.apiListings.furniture.availableVariants["v1.1.0"].get, options);
}catch(err){
  console.log(err);
}
return [menusdata, offerdata, furnituredata];
  };


  const menudataout = await menudataclc();
  menu_data= JSON.stringify(menudataout[0].data.apiGroups.affiliate.apiListings);
  home_data= JSON.stringify(menudataout[1].data.allOffersList);
  product_data= JSON.stringify(menudataout[2].data.products);

var tim = new Date();

console.log(tim.getDate()," : ",tim.getHours()," : ", tim.getMinutes()," : ", tim.getSeconds());

    fs.writeFile('menudata.json', menu_data, function (err) {
      if (err) throw err;
      console.log('menu_data Saved!!!!!!!!!!!!!!!!');
    });
    fs.writeFile('offerhome.json', home_data, function (err) {
      if (err) throw err;
      console.log('offerhome Saved!!!!!!!!!!!!!!!!');
    });
    fs.writeFile('productdata.json', product_data, function (err) {
      if (err) throw err;
      console.log('productdata Saved!!!!!!!!!!!!!!!!');
    });
    console.log(".........completed.................");
})();








}, 350000);



whlmenudata = JSON.parse(fs.readFileSync('menudata.json', 'utf8'));
console.log("______________________________________________________loading __________________________________________________________");

setInterval(function(){ 


  console.log("..............................start ........................");

 



  






 var menu_dat = JSON.parse(fs.readFileSync('menudata.json', 'utf8'));
  Object.keys(menu_dat).forEach(function(apiCat, index) { 
    
    var ul =  menu_dat[apiCat].availableVariants["v1.1.0"].get;



   axios.get(ul, options).then(function(res){
  
    var datasmenu1 = JSON.stringify(res.data);
    console.log(ul,".................................",datasmenu1);
  
    var flname = __dirname+"/datas/"+apiCat+".json";
       fs.writeFile(flname, datasmenu1, function(err){
         if (err) throw err;
  console.log(flname,"----*********************************************************saved");
       });
  
  
   }).catch(function(err){console.log(err)});




















  });

     

}, 3600000);













app.get("/", function(req, res){
  menu_data = whlmenudata;
  home_data = JSON.parse(fs.readFileSync('offerhome.json', 'utf8'));
  mbl_data = JSON.parse(fs.readFileSync('productdata.json', 'utf8'));
  today_off = JSON.parse(fs.readFileSync('offerhome.json', 'utf8'));



     res.render("home", {home_Sldr : home_data, menu_dat: menu_data, mbl_Sldr:mbl_data, today_offer: today_off} );
    











   


});



app.get(/.*product*/, function(req, res){

    var urlpg= req.originalUrl.split("/product/")[1];
    urlpg = __dirname+"/datas/"+urlpg+".json";
    console.log("-------------------------------ok ---------------------"+ urlpg); 
    
    menu_data = whlmenudata;

    prdt_data = JSON.parse(fs.readFileSync(urlpg, 'utf8'));

  console.log(req.originalUrl,",,,,,,,,,,,,,,,,");

  
   res.render("product", {menu_dat: menu_data, pr_data: prdt_data});       


});

app.get(/.*category*/, function(req, res){

    var urlpg= req.originalUrl.replace(/%3F/g, "?");
    urlpg = "https://affiliate-api.flipkart.net"+ urlpg;
    console.log("-------------------------------ok ---------------------"+ urlpg); 
    
    



    (async() => {
        const asyncExample = async() => {
          let data1, data2;
          try {
          //  data1 = await axios.get("https://affiliate-api.flipkart.net/affiliate/api/onlinesho41.json",options);
            data2 = await axios.get(urlpg,options);
        } catch (err) {
            console.log(err);
          }
          return [data1, data2];
        };
      
        //Save response on a variable
       const globalData = await asyncExample();
      menu_data = whlmenudata;
     //  menu_data= globalData[0].data.apiGroups.affiliate.apiListings;
       prdt_data= globalData[1].data;


  
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
      //    data1 = await axios.get("https://affiliate-api.flipkart.net/affiliate/api/onlinesho41.json",options);
          data2 = await axios.get(urlpg,options);
      } catch (err) {
          console.log(err);
        }
        return [data1, data2];
      };
    
      //Save response on a variable
     const globalData = await asyncExample();
    menu_data = whlmenudata;
    // menu_data= globalData[0].data.apiGroups.affiliate.apiListings;
     prdt_data= globalData[1].data;



 res.render("product", {menu_dat: menu_data, pr_data: prdt_data})       
})();

});





app.listen(port, function(){console.log("server running on port 8080")});
