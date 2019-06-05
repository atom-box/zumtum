# Zunthum Magazine

## What's going on here
I'm building a [fake magazine site](https://atom-box.github.io/quanta/).  
<br>This should allow for lots of ways to 
integrate syntax that I'm trying out: ES5/6 functional **JS**, 
better **HTML** descriptors, and **CSS**. Once I add 
**MongoDB** it will 
be a fullstack and I can re-deploy it on my D.O. server instead of 
Github as a static page.  
Deadline: CSS/HTML sorted out by June 14. Actual node server to MongoDB by June 25.
## Workflow
* Write normal HTML/CSS in the DOCS directory.  Keep a folder of images 
there too. 
* The only workflow for now is, minify CSS/HTML by hand 
(at [Browserling](http://browserling.com)) with copy/paste and move it 
to BUILD.  
* The BUILD directory is just a **Node.js** file.  
* Not using any gulp.js yet.
* The version of this page that runs from Github cannot run a node 
sever, so it is just the HTML/CSS from the static page.   
## To run
`node.js qServer.js` will create a local host on 8080.
## Changelog
* Add 4 buttons to articles: cut, info, calc, pics.
* Create buttons and subject and title classes for article CSS.
* Move logo to left and nav buttons right.  Add live navlinks.
* Adjust sizes of the navbar div elements and text.
* Add floats navbar in black.
* Small quickie logo with log slice background.
* Loop, print the request headers req.headers.
* Make route display, big ,green ,sans. Add parser goals and example.
* Add a switch statement to capture LENGTH of the route.
* Make a two div route viewer.
* Write a one route server that delivers a single line of minifed HTML.
## Most Valuable Player
![OReilly Book Cover](https://github.com/atom-box/quanta/blob/master/oreilly.jpg)
