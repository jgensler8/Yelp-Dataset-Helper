//set up middleware
var restify = require('restify');
var server = restify.createServer();
server.use( restify.bodyParser()); //turning request data into JS object on server

//set up database
var mongoose = require('mongoose');
var opts = require('./options.json');
db = mongoose.connect('mongodb://' + opts.user + ':' + opts.pass + '@localhost:' + opts.port + '/' + opts.database);
var schemas = require('./schemas');

/****************************************
         INIT DATABASE
*****************************************/
/*
var fs = require('fs');
var Lazy = require('lazy');
var lazy = new Lazy( fs.createReadStream('./data/yelp_academic_dataset_business.json'))
  .lines
  .forEach( function(line ){
    var obj = JSON.parse(line);
    var business = new schemas.business;
    business.business_id = obj.business_id;
    business.name = obj.name;
    business.neighborhoods = obj.neighborhoods;
    business.full_address = obj.full_address;
    business.city = obj.city;
    business.state = obj.state;
    business.latitude = obj.latitude;
    business.longitude = obj.longitude; 
    business.stars = obj.stars;
    business.review_count = obj.review_count;
    business.categories = obj.categories;
    business.open = obj.open;
    for( day in obj.hours){
      business.hours[day].open = obj.hours[day].open;
      business.hours[day].close = obj.hours[day].close;
    }
        
    business.save( function(error, data){
      if(error){ console.log(error) }
      else{ console.log(data) }
    });
  });
*/
/*************************************
        END INIT DATABASE
*************************************/

var query = schemas.business.find( { 'name': /pizza/ });
query.exec( function (err, bus){
    if( err) console.log("ERROR");
    else console.log( bus.toString());
  });


