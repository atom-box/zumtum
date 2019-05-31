# Quanthum Magazine

## What's going on here
Build a fake magazine site.  This should have lots of ways to integrate 
vanilla JS, better HTML descriptors, and CSS.  
## Workflow
Write normal HTML/CSS in the SRC directory.  Keep a folder of images 
there too. The only workflow for now is, minify these by hand 
(at Browserling browserling.com) and move them to BUILD.  At build, 
there is just a Node.js file, with the page served as a single static 
view, no index.html file at all.
## To run
`node.js qServer.js` will create a local host on 8080.
## Technologies
Node.js
