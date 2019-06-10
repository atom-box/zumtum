        import {z} from './articles.js';

        console.log(z[7]);

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
        let articles = JSON.parse(z);
        console.log(articles[1].author); 




// asidifier();