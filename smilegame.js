
var numberOfFaces = 2;

function generateFaces(){
  // adds the faces to the right side in random locations
  var theLeftSide = document.getElementById("leftSide");
   var theRightSide = document.getElementById("rightSide");
  for (i = 0; i<numberOfFaces;i++){
    var img = document.createElement("img");
    var top = Math.floor(Math.random()*400);
    var left = Math.floor(Math.random()*400);
    top=top.toString() + "px";
    left=left.toString() + "px";
    img.setAttribute('src','smile.png');
    img.setAttribute('position','absolute');
    theLeftSide.appendChild(img);
    theLeftSide.lastChild.style.top= top;
    theLeftSide.lastChild.style.left= left;
  }
  // need to clone images to the right side
  var the_clone=theLeftSide.cloneNode(true);
  the_clone.removeChild(the_clone.lastChild);
  theRightSide.appendChild(the_clone);
  
  //increase the number of faces and start over, passed level
  theLeftSide.lastChild.onclick=function nextLevel(event){
    event.stopPropagation();
    numberOfFaces += 2;
	while(theLeftSide.firstChild)
		theLeftSide.removeChild(theLeftSide.firstChild);
	while(theRightSide.firstChild)
	    theRightSide.removeChild(theRightSide.firstChild);
    generateFaces();
    };
   
   //got wrong answer
   var theBody = document.getElementsByTagName("body")[0];
   theBody.onclick = function gameOver(){
     alert("Game Over!");
     theBody.onclick=null;
     theLeftSide.lastChild.onclick=null;
     };

  
}

