# Quanthum Magazine

## What's going on here
Build a fake magazine site.  This should have lots of ways to integrate 
vanilla **JS**, better **HTML** descriptors, and **CSS**. Once I add 
**MongoDB** it will 
be a fullstack and I can re-deploy it on my D.O. server instead of 
Github as a static page.  
## Workflow
* Write normal HTML/CSS in the SRC directory.  Keep a folder of images 
there too. 
* The only workflow for now is, minify CSS/HTML by hand 
(at Browserling browserling.com) by copy/paste and move them to BUILD.  
* The BUILD directory is just a **Node.js** file.  For now it serves the 
page as a single static 
view, no index.html file at all.
* Not using any gulp.js yet.
## To run
`node.js qServer.js` will create a local host on 8080.
## Technologies
Node.js
