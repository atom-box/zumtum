"use strict"
const PORT = 2001;

let express = require('express');
let app = express();
let handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('test'); // TODO
});

// WORKS.
app.get('/nohandlebars', function(req, res){
	res.type('text/plain');
	res.status(456);
	var now = new Date();
	res.send(`You are special. ${now} And life is short.`);
}  )

app.get('/signin', function(req, res){
	res.render('signin')
});

// THIS RENDERS THE TEMPLATE ONLY
app.get('/stepA', function(req, res){
	res.render('stepA');
});

// THIS GIVES 404 ERROR -- SLASH IS REQUIRED
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