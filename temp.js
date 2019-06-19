var express = require('express');
var app = express();

const PORT = 2020;
app.get('/', (req, res)=>{
	res.type('text/html');
	let now = new Date();
	res.send(`<h1>Just the most important page in THE WORLD.</h1>`);
})


app.get('/cookies', (req, res)=>{
	res.type('text/html');
	res.send(`<h1>Cowboy cookies</h1><p><i>Half </i> Off!</p>,<h6>Our choice which "half".</h6><p>Offer ends at ${Date.now()}</p>`);
})
app.use((req, res)=>{
	res.type('text/plain');
	res.status(400);
	res.send(`You have arrived but not where you expected.`);
});
app.use((err, req, res, next)=>{
	res.type('text/plain');
	res.status(500);
	res.send(`Our slip is showing!`);
})
app.listen(PORT, function(){console.log(`app is listening on port number ${PORT}`)});