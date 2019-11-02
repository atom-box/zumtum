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
*/



// overarching namespace for all the logic, an Object
let chnk = {};
chnk.PARWORDS = 350; // words per prg-brk
chnk.bookRaw = ''; // String. raw 'Hamlet'



// holds Hamlet broken into [{}, {}, ... ], Array ofObjects
chnk.bookParsed = []; 

// default first object to show schema
const defaultBlob = { paragraph: 'some text to study here',
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
// * Accepts any string
// * Accesses nothing
// * Returns an array-of-arrays
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
// if called without ID, displays the string to terminal console 

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
        default:
            console.log('no optional args recognized');     
    }
}

console.log('finis');
