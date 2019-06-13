        import {z} from './articles.js';
        console.log(z[7]);
        let articles = JSON.parse(z);
        console.log(articles[1].author); 

        function clipArticle(){
            alert("TODO: 1) once articles are served from the static pseudo db 2) make a function to send to the system's clipboard");
        }




        // 001 CHANGER
        let elInfo001 = document.getElementById("footer__logo");
        elInfo001.innerHTML = "starch";
        elInfo001.style.color = "yellow";
        console.log('Last line.');

        //002 ONCLICK ONMOUSEOVER in the HTML itself

        //003 APPEND
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
        
function tossInSomeTags(o){
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



    let html = articles.reduce(function(accum, curr){
        return `${accum}` + tossInSomeTags(curr);}  , '<h1>Begin</h1>');
    document.getElementById(i).innerHTML = html;
}




showArticles('insert001', articles);
// asidifier();