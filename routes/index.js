var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
	var students = ['Guido', 'Porscha', 'Hayes', 'Nick', 'Daniel'];
  res.render('index', {
  	title: 'Express',
  	studentsArray: students
  });
});

router.get('/test', function(req, res, next) {
  res.send('<h1>router test</h1>');
});

//make a route for /weather specifically a get route.
//if someone makes a http request to the route below
//then run the anon function. the anon function has 2 objects automatically,
//request and response.
router.get('/weather',(req,res)=>{
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+config.apikey;
    request.get(weatherUrl,(error,resposonse,data)=>{
		var weatherData = JSON.parse(data);
		res.render('weather',{
			weatherObject: weatherData
		})
 		// res.send('check console.');
    })
})

module.exports = router;
