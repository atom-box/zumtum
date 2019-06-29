"use strict"

let express = require('express');
let app = express();

const PORT = 2001;

app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Open for business.')
});

app.get('/frogs', function(req, res){
	res.type('text/plain');
	res.send('This is a special page, called FRONGS');
});

app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	let now = new Date();
	res.send(`Your bad. At ${now}.` );
});

app.use((err, req, res, next)=>{
	res.type('text/plain')
	res.status(500);
	res.send('Server says, "My bad."')
})


app.listen(PORT, function(){
	console.log(`Listening on Port ${PORT}. Press Ctl-C to quit.`);
});

//