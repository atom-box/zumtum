"use strict";

// Mostly for testing in Node.  
// Major rebuild of evan.js
// Oct 31, 2019



/*
 .----------------.  .----------------. 
| .--------------. || .--------------. |
| |  ________    | || |   ______     | |
| | |_   ___ `.  | || |  |_   _ \    | |
| |   | |   `. \ | || |    | |_) |   | |
| |   | |    | | | || |    |  __'.   | |
| |  _| |___.' / | || |   _| |__) |  | |
| | |________.'  | || |  |_______/   | |
| |              | || |              | |
| '--------------' || '--------------' |
 '----------------'  '----------------'
 This section imports some default texts into the volatile db namespace: 'db'
*/

// gotta run as node -r esm evan2.js to get import to work
import macbeth from './macBeth.js';
import canterburyString from './canterbury.js';
// import syntax see p140 in Yellow NB
// or REVIEW https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
const db = {};
db.macbeth = macbeth;
db.canterbury = canterburyString;
db.userTyped = 'Paste in your text here.'


/*
         _                       _    
        | |                     | |   
   ___  | |__    _   _   _ __   | | __
  / __| | '_ \  | | | | | '_ \  | |/ /
 | (__  | | | | | |_| | | | | | |   < 
  \___| |_| |_|  \__,_| |_| |_| |_|\_\
                                      
                                      
This section is intended to take a mega string, like the unabriged Hamlet, and set it into reasonable chunks.  Right now it breaks on the number of words in PARWORDS, no matter what. TODO It might later take into account two consecutive newlines.

The CHNK namespace holds the data, the logic, and the tests
*/



// CONFIG
let chnk = {};
chnk.PARWORDS = 350; // words per prg-brk
chnk.bookRaw = ''; // String, for example: raw 'Hamlet'

// holds Hamlet broken into [{}, {}, ... ], Array ofObjects
chnk.bookParsed = []; 

// holds test methods
chnk.test = function(){};

// default first object to show schema
const exampleBlob = { source: 'some text to study here',
	gloss: 'user-typed text here'
}

// Displays on page if given an HTML ID and a HTMLCONTENTASstring, it will show it.
chnk.putToTabTwo = function(id, s){
	let elLocal =  document.getElementById(id);
	elLocal.innerHTML = s;
}

// 1 1 1 1 1 1 1 1 1 11111111111
// For testing.  This will display the entire raw text
// * Accepts elementID from page
// * Returns nothing.  
// * Sets this.bigString
chnk.showBigString = function(e){
		// element naming scheme is TAB#-EL-subelement
    let oneEl1 = document.getElementById(e);
    inputZoneEl.innerHTML = lib[sRequest];
    console.log(`Found ${this.bigString}. It is ${this.bigString.length} long.`)
    this.bigString = inputZoneEl.value;
};

// 2 2 2 2 2 2 2 2 2222222222222222
// For testing.  Makes one fake randomized blob
// * Accepts nothing
// * Accesses nothing
// * Returns { source: 'some text to study here',
//   gloss: 'user-typed text here' }
chnk.makeFakeBlob = function() {
  const testWords = ["when", "for", "haskell", "haskell", "if", "in", "our", "the", "we've", "whereas", "while", "a", "actually", "an", "and", "back", "based", "because", "binary", "bit", "burn", "by", "called", "can", "can't", "car", "change", "changes", "changing", "coming", "computer", "contents", "cool", "crunch", "crunching", "defining", "didn't", "do", "dog", "done", "down", "element", "execute", "", "for", "from", "function", "functional", "gave", "get", "give", "giving", "guarantee", "has", "have", "house", "", "imperative", "in", "insert", "inserting", "instance", "", "into", "is", "is", "it", "it's", "it", "just", "kidnap", "language", "language", "languages", "like", "limiting", "making", "may", "mentioned", "modifying", "more", "new", "no", "numbers", "numbers", "of", "old", "on", "one", "only", "parameters", "parameters", "", "place", "potato", "programming", "purely", "really", "result", "result", "return", "returned", "same", "say", "scratch", "search", "seem", "seen", "series", "should", "side-effects)", "simple", "some", "state", "", "steps", "stuff", "that", "the", "thing", "things", "this", "those", "times", "to", "tree", "tree", "", "two", "us", "usually", "variable", "we", "we've", "were", "what", "when", "while", "with", "won't", "world", "", "you", "you're", "your"];
  let outstring = "";
  for (let i = 0, stop = 350, z; i < stop; i++){
    z = Math.floor(145 * Math.random() );
    outstring = outstring + " " + testWords[z]; 
  }
  return {source: outstring , gloss: ''};
}

// 2 2 2 2 2 2 2 2 2222222222222222
// For testing  Breaks a single big string into array of small
// * Accepts any string
// * Accesses nothing
// * Returns an array-of-BLOBobjects
chnk.makeArrOfArrs = function(){
    console.log(`Accessing length of ${this.bigString.length} long.`);
    return [[5,6],[7,8],[9,10],[11,12]];
};

// 3 3 3 3 3 3 3 3 3 33333333333333
// * Accepts any array of arrays AND an ID from DOM;
// * Accesses the ArrOfArrs internally
// * Installs a bunch of HTML divs in the webpage
chnk.deployDivs = function(){
    console.log(`Received thing is ${s.length} long.`);
};


/*
 __      _____     ___    ____     ___ 
(  )    (  _  )   / __)  (_  _)   / __)
 )(__    )(_)(   ( (_-.   _)(_   ( (__ 
(____)  (_____)   \___/  (____)   \___)
*/
// if called without webpage #ID, displays the string to terminal console 

let show = function(s, id) {
	if (id === undefined){
		console.log(s);
	} else if (typeof id === 'string') {
		let el = document.getElementById(id);
		el.innerHTML = s;
	} else {
		console.log(`SHOW func was passed a ${typeof id}`);
	}
}


/* Given a huge monostring and a word limit will
** returns stringbeforetheindexedbreak and stringaftertheindexedbreak
*/
function breaks(text, wordLimit) {
	let index = 0,
	spaceDefinition = /[^A-z]/;   // TODO less crude
	show('cheer');
	while (false){
		if (text[index].match(spaceDefinition)){
			wordLimit -= 1;

		}
		index +=1;
	}
	return [ text.slice(0, index), text.slice(index) ];

}


 //                      _         
 //                     (_)        
 //  _ __ ___     __ _   _   _ __  
 // | '_ ` _ \   / _` | | | | '_ \ 
 // | | | | | | | (_| | | | | | | |
 // |_| |_| |_|  \__,_| |_| |_| |_|
                                                               
// This EVAN.JS is meant to load into .hmtl but to test it, just
// say NODE EVAN.JS at the command line and one of the switch args below

if (process.argv[2] !== undefined) {
    switch (process.argv[2]) {
        case 'lengthofimport': 
            console.log(`Mac is ${macbeth.length}`);
            console.log(`Cant is ${canterburyString.length}`);
            break;
        case 'setandshowraw': 
        	chnk.bookRaw = db.canterbury;
        	show(chnk.bookRaw);
          break;
        case 'showmacfiftyspace':
         	show(breaks(db.macbeth, 50));
         	break;
        case 'showfakeblob':
          show(JSON.stringify(chnk.makeFakeBlob()));
          break;

        default:
            console.log('no optional args recognized');     
    }
}

console.log('finis');


/*
TODOs
1. Big string to pieces
2. based on array of pieces, roll out the divs
3a. comments to a db 
3b. simultaneously comments to tab 3 
4. exportas a csv
5. can read user input
6. can read a pdf
7. can re-import the csv
8.  QUIT.  DON'T POLISH

*/