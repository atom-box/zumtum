"use strict"

let express = require('express');
let app = express();

const PORT = 2001;

app.use(function(req, res){
	res.type('text/plain');
	res.status(500)
	res.send('Server says, "My bad."')
});

app.use((err, req, res, next)=>{
	res.type('text/plain')
	res.status(400);
	let now = new Date();
	res.send(`Your bad. At ${now}.` );
})


app.listen(PORT, function(){
	console.log(`Listening on Port ${PORT}. Press Ctl-C to quit.`);
});