const http = require('http');
const PORT = 8080;
let minifiedContent = `<div><h1 class="title__hoegarden">Quanta Magazine</h1><h3 class="title__skinny">Illuminating basic science and math research through public service journalism.</h3></div><div class="col-md-9 outblock block elShadow"><p>evolution</p><h2>Icefish Study Adds Another Color to the Story of Blood</h2><p>By John Rennie</p><p>The rainbow of pigments that animals use for blood illustrates a central truth of evolution.</p></div><div class="col-md-9 outblock block elShadow"><p>evolution</p><h2>Researchers Rethink the Ancestry of Complex Cells</h2><p>By Christie Wilcox</p><p>New studies revise ideas about the symbiosis that gave mitochondria to cells and about whether the last common ancestor of all eukaryotes was one cell or many.</p></div><div class="col-md-9 outblock block elShadow"><p>astro-geology</p><h2>The Scientist Who Cooks Up the Skies of Faraway Worlds</h2><p>By Shannon Hall</p><p>Astronomers will soon take their first glance at the atmosphere of a distant exoplanet. Sarah Hörst is writing the guidebook for these exoplanetary explorers, one that will reveal what a distinctive atmosphere says about the world underneath.</p></div><div class="navyBackground"><h2>Quanta</h2><p>Want to Join Us?</p><p>Collaborate with the best team in science journalism. A universe of possibilities awaits.</p><p class="greentext">All Rights Reserved © 2019</p></div><title>Quanta Magazine &#8211; Illuminating Science | Quanta Magazine</title><style type="text/css">:root{--lightGray:#efeff4;--darkGray:#4c4d4b;--skyColor:#7cacff;--palerSky:#a5dcff;--infieldGreen:#34931c;--tigersNavy:#071735}button{margin-left:3rem}img{width:98%}.title__hoegarden{text-shadow:1px 1px 2px black,0 0 25px gray,0 0 5px black;font-family:monospace;color:white;font-weight:500}.title__skinny{font-weight:100;font-size:.8rem;text-indent:2.5rem;line-height:2.6rem}.elShadow{box-shadow:0 7px 7px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);border:.1rem hidden;border-radius:.3rem}.dashboard{border:2px white;margin:.5rem 2rem;background-color:#444;color:var(--lightGray);padding:.5rem}.dashboard__text{margin:.3rem 1.5rem;color:white}.dashboard__data-noneditable{color:black;background-color:#777}.codeboard{border:5px dashed #bbb;margin:.5rem 2rem;background-color:#222;padding:.5rem}.codeboard__code{color:#aaf;margin:.3rem 1.5rem .3rem 1.9rem}.block{background-color:var(--lightGray);margin:1rem;padding:2rem}.navyBackground{background-color:var(--tigersNavy);color:white;padding:.1rem .3rem}.greenBackground{background-color:var(--infieldGreen);border-radius:.6rem;padding:.1rem .3rem}.greentext{color:var(--infieldGreen)}</style>    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/css/bootstrap.min.css" integrity="sha384-PDle/QlgIONtM1aqA2Qemk5gPOE7wFq8+Em+G/hmo5Iq0CCmYZLv3fVRDJ4MMwEA" crossorigin="anonymous">`

let URLdisplayingFunction =(req)=>{ 
	let enlargedURL = '<h1 style="font-family: arial sans-serif; color: green; font-size: 7rem ">' + req.url +  '</h1>';
	let message = '<h1>In pure Node.js, the request object only has two properties!</h1><h3 style="font-family: monospace"> ';
	message += 'Headers has this many things in its object: ' + req.headers + '<br>' ;
	message += 'URL is: ' + req.url + '<br>';
	message += '...thats it.';
	message += '</h3>';
	message += enlargedURL;
}
const theServer =(req, res)=>{
	res.writeHead(200, '{"Content-Type": "text/html"}');
		minifiedContent += URLdisplayingFunction(req);

	res.end(minifiedContent);
}  
http.createServer(theServer).listen(PORT);
console.log(`Rockin it on port number #${PORT}`);