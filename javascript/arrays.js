//create an array - LITERAL (best practice)
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];
//let's output the list without sorting it first
//console.log(colorList);
//now let's sort the colors alphabetically
//colorList.sort();
//console.log(colorList);
//now sort in reverse
//colorList.reverse();
//console.log(colorList);

//make a list of scores (numbers!)
var scores = [1000, 5, 345, 888, 1, 383, 357, 568, 257, 6, 3, 2, 77, 467945];

//colorList.pop();//this removes the end element (last item in list) and returns the element
//assign the end element to a result variable
//var endElement = colorList.pop();

//colorList.shift(); //removes the first element (item in list)

//colorList.unshift("brown"); //adds to the front of the list of elements. Unshift? Really? Yep.

colorList.splice(0,1);
//splice takes out one or many elements. First argument=starting position in list (item 0 for ex). second argument is how many items to take out

var myThumbDiv = document.getElementById("thumbs");

//variables IN functions (function scope), can see global varibles)

//note the empty brackets that we then populate with our array
var imageListA = [];
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = [];
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
var imageListC = [];
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";



//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
  //for the thumbs_block div, see your CSS
  //+= is adding to whatever came before
    output += '<div class="thumbs_block">  ';
	for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
  //closing the html output started above
  output += '</div>';
	
  output += '<div class="thumbs_block">  ';
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
  
  output += '</div>';
// 	
  
    output += '<div class="thumbs_block">  ';
	for(var k=0; k < imageListC.length; k++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListC[k] + '" />';
	}
  
  output += '</div>';
	thumbsDiv.innerHTML = output;
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}





window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};

//Homework 4: build a new array (list) to hold the purchased images
var purchasedImages = [];

//attach a click event to the div with id= "thumbs"
myThumbDiv.addEventListener("click", onImageClick, false);
//the above is standard for attaching a mouse click
//and here's the clicky function handler:
function onImageClick(evt)
{
  
  //homework 4: we only want to get the src attribute of the clicked image here:
  var onlyPath = evt.target.getAttribute("src");
  //console.log(onlyPath);
  
  //homework 4: the indexOf array method searches for a match in the array. If it finds data matching the "src" we're getting above, it returns the index position in the array.
  var imageIndex = imageListA.indexOf(onlyPath);
  
  //Homework 4: get the element you clicked OUT of the imageListA array and save the clicked image path to a variable so we can use it later. remember that the splice command is important. Normally you see something like imageListA.splic(0,3), which means go to the first item in the list (0) and remove it, then do that for the next 3 items (3). But here, we're saying "go to the output contained in imageIndex and remove that value. The trailing 1 means do it once.
  var selectedImage = imageListA.splice(imageIndex, 1);
  //console.log(selectedImage);
  
  //homework 4: so here's where the magic happens: this is where the viewer will see the images "disappear" from the select area and appear in the purchase area (the purchasedImageArray). Push adds the element to the new array:
  
  purchasedImages.push(selectedImage);
  update_shopping_cart();
  buildThumbnails();
  
}

function update_shopping_cart()
{
  
  //Homework 4: make a shortcut to the div id="shopping_cart_div"
  var cart = document.getElementById("shopping_cart_div");
  
  //homework 4: create an output variable so we can build it up later over the following lines:
  var output = "";
  
  //homework 4: create a for loop
  for(var i=0; i <= purchasedImages.length -1; i++ )
    //homework 4: for the above, use -1 after imageList.length so the condition is always one number less (to match the image number, because remember that computers count from 0 to 9, not 1 to 10)
    {
      output += '<img src="' + purchasedImages[i] + '" width="70" height="50" />';
    }
  cart.innerHTML = output;
  //console.log(imageIndex);
  //console.log(evt.target);
  //show just the element that gets clicked
  //and below we're saying every time you click, set the attribute's source to a particular image. This will swap images.
  //evt.target.setAttribute("src", "images/drawing/thumbs/artwork_22.jpg");
  //or we can even enforce some shitty CSS when we click an image:
  //evt.target.setAttribute("style", "padding:3rem;");
  //the following means: "in the following list of items, find this item that matches the indicated path and report on where it resides in the list (array)"
  //var imageIndex = imageListA.indexOf("images/drawing/thumbs/artwork_7.jpg");
  //console.log(imageIndex);
}
  