const http = require('http');
const digitalOcean =(req, res)=>{
	let enlargedURL = '<div style="border: 5px solid #999;"><h1 style="font-family: arial; color: green; font-size: 7rem ">' +req.url+  '</h1></div>';
	let message = '<h1>In pure Node.js, the request object only has two properties!</h1><h3 style="font-family: monospace"> ';
	message += 'Headers has this many things in its object: ' + req.headers + '<br>' ;
	message += 'URL is: ' + req.url + '<br>';
	message += '...thats it.';
	message += '</h3>';
	message += enlargedURL;
	res.writeHead(200, '{"Content-Type": "text/html" } ');
	console.log(true + "yeah");
	res.end(message);
}

http.createServer(digitalOcean).listen(2121);