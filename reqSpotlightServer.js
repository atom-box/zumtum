const http = require('http');
console.time("sherbet");
const digitalOcean =(req, res)=>{
	let enlargedURL = '<div style="border: 5px solid #999;"><h1 style="font-family: arial; color: green; font-size: 7rem ">' +req.url+  '</h1></div>';
	var headerThings = '';
	for(var name in req.headers) headerThings += name + ': ' + req.headers[name] + '       ';
	let styling = '<style type="text/css">:root{--lightGray:#efeff4;--darkGray:#4c4d4b;--skyColor:#7cacff;--palerSky:#a5dcff;--infieldGreen:#34931c;--tigersNavy:#071735}.title__hoegarden{text-shadow:1px 1px 2px black,0 0 25px gray,0 0 5px black;font-family:monospace;color:white;font-weight:500}.title__skinny{font-weight:100;font-size:.8rem;text-indent:2.5rem;line-height:2.6rem}.elShadow{box-shadow:0 7px 7px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);border:.1rem hidden;border-radius:.3rem}.greentext{color:var(--infieldGreen)}h1, h2, h3, h4, h5{ font-family: verdana; }p{font-family: monospace}</style>';
	let message = styling + '<h1>In pure Node.js, the request object only has two properties!</h1><h2> ';
	message += '1) Headers:</h2><p>'+ headerThings + '</p>' ;
	message += '<h2>2) The URL is:</h2><p> ' + req.url + '<br></p><h2>';
	message += '...thats it.';
	message += '</h2>';
	message += enlargedURL;
	var now;
	
	console.log('req url length is ' + req.url.length)
	switch(req.url.length){
		case 1:
			message = '<h1>Oh, try again, Mister Nothing!</h1>';
			break;
		case 2:
			message = '<h1>Ah, the loneliest number.</h1>';
			break;
		case 3:
			now = new Date();
			message = `<p><i>Q: What time is it?  A: ${now} </i></p>`;
			break;
		default: 
			now = new Date();
		 	console.log("made it to default at " + now);
	}

	res.writeHead(200, '{"Content-Type": "text/html" } ');
	now = new Date();

	console.log(`GET at ${now}.`);
	res.end(message);
}

http.createServer(digitalOcean).listen(2121);
console.log("The port is 2121.");
console.timeEnd("sherbet");
/*
Turn it on 
make stub object
steer by that object
parse by hand the areacode
steer by part of new parsings
display other part of parsing
https://duckduckgo.com/?q=game+of+life&t=ffsb&ia=web


https://en.wikipedia.org/wiki/The_Game_of_Life#/media/File:CheckeredGameofLife.jpg
*/