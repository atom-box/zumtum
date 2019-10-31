// Mostly for testing in Node.  
// Major rebuild of evan.js
// Oct 31, 2019



// WARNING
// WARNING
// WARNING

// gotta run as node -r esm evan2.js to get import to work
import macbeth from './macBeth.js';
import canterburyString from './canterbury.js';

// PLEASE see p140 in Yellow NB
// or REVIEW https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import


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

        default:
            console.log('no optional args recognized');     
    }
}

console.log('finis');
