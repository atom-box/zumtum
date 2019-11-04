// gotta run as node -r esm filename.js to get import to work

/* For a list of given strings pad out two parts.   
1.  Any trailing digits get padded with leading zeroes to make the number six digits.
2.  The leading two digit year gets padded out to a four digit year.
*/

"use strict;"
import tags from "/Users/evan/Dropbox/code/codingBatJS/helpers/padderDB.js"

let option = process.argv[2];
if (option !== undefined){
	switch (option){
		case 'nada':
			console.log(`Running the :::${option}::: test.`)
			break;
		default: 
			console.log(`:::${option}::: not recognized.`)
	}
} else {
	console.log(`To run tests, enter an option besides ${option}`)
} 