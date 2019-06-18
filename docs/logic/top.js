/******* MODEL  *******/
import {z} from './articles.js';

function getArticles(){
    return Z;
}

// GLOBAL
let articles = getArticles();





function clipArticle(){  
    // RIGHT THUMB in the BUTTONS
    alert("TODO: 1) once articles are served from the static pseudo db 2) make a function to send to the system's clipboard");
}


// 001 CHANGER
let elInfo001 = document.getElementById("footer__logo");
elInfo001.innerHTML = "starch";
elInfo001.style.color = "yellow";
console.log('Last line.');



//003 DIV APPEND
/*
make a mnemonic: five steps: create el, create child, append child , into a var get element, append child again
*/
function asidifier(){
    let wikDiv = document.createElement("aside");
    let wikTxt = document.createTextNode("Evolution is change in the heritable characteristics of biological populations over successive generations.");
    wikDiv.appendChild(wikTxt);
    let roofEl = document.getElementById("article001");
    roofEl.insertAdjacentElement("afterend", wikDiv);
}

        //004 Display articles from the JSON
        
function interleaveSomeTags(o){
    // takes one OBJECT
    // returns a string of HTML
         let oneArticle = ` 
  <div class="col-md-9 curvy-div ${o.css__border}" id="article001">

    <p class="article-subject">${o.topic}</p>
    <div class="article-button">
      <i class="far fa-hand-point-left" href="http://example.com"></i>
    </div>
    <div class="article-button">
      <i class="far fa-hand-point-up" href="http://example.com"></i>
    </div>
    <div class="article-button">
      <i class="far fa-hand-point-down" href="http://example.com"></i>
    </div>
    <div class="article-button">
      <i class="far fa-hand-point-right"  href="http://example.com" ></i>
    </div>
    <h2 class="article-title">${o.title}</h2>
    <p>By ${o.author} </p>
    <p>${o.content}</p>
    </div>
 `;
    return oneArticle;
}


function showArticles(i, a){
// Accepts an array of ARTICLE OBJECTS (a).
// Accepts a string for ID (i).
// Returns nothing; modifies the DOM.
    let articles = getArticles();
    let html = articles.reduce(function(accum, curr){
        return `${accum}` + interleaveSomeTags(curr);}  , '<h1>Begin</h1>');
    document.getElementById(i).innerHTML = html;
}

function addArticle(){  /*************************************************/
    let articles = getArticles();
    let submission = document.getElementById('newArticle').value;
    let now = new Date();
    console.log( now.getSeconds() +  '  ' + submission );
    let newArticleObject = {
        'id': '0000',
        'css__border': 'curvy-div__darker-border',
        'topic':   'sanctuary',
        'title': submission.slice(3,6),
        'author': 'You',
        'content': submission}     
    };
    let articleNouveau = interleaveSomeTags(newArticleObject);


}


// LISTEN TO THE SUBMIT ARTICLE BUTTON
document.getElementById('submit').addEventListener('click', addArticle);

// APPEND ALL THE ACTUAL DIVS 
showArticles('insert001', articles);



// asidifier();