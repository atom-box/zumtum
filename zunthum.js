"use strict"

let express = require('express');
let app = express();

const PORT = 2001;

app.get('/', function(req, res){
	res.render('home');
});

app.get('/signin', function(req, res){
	res.render('signin')
});

app.get('/stepA', function(req, res){
	res.render('stepA');
});

app.get('/stepB', function(req, res){
	res.render('stepB');
});

app.get('/stepC', function(req, res){
	res.render('stepC');
});

app.use(function(req, res, next){
	res.type('text/plain');
	res.status(404);
	let now = new Date();
	res.send(`Your bad. At ${now}.` );
});

// DOUBLECHECK WHICH HAS NEXT

app.use((err, req, res, next)=>{
	res.type('text/plain')
	res.status(500);
	res.send('Server says, "My bad."')
})


app.listen(PORT, function(){
	console.log(`Listening on Port ${PORT}. Press Ctl-C to quit.`);
});

//