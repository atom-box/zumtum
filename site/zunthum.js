"use strict"

let express = require('express');
let app = express();

const PORT = 2001;
// app.set
// app.use
// app.use
app.listen(PORT, function(){
	console.log(`Listening on Port ${PORT}. Press Ctl-C to quit.`);
});