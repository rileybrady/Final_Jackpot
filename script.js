// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

a = document.getElementById("slot1")
b = document.getElementById("slot2")
c = document.getElementById("slot3")
var mySound =  document.getElementById('you-win');

// cycle images in the following order: CHERRY --> LEMON --> ORANGE

function nextImage(el){
	if (el.src.match("images/lemon_slot.PNG")){  
		el.src = "images/bar_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
			
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}
//LEAVING OFF FROM TUESDAY, YOU NEED TO DO SLOT 3 ORDER AND PHOTO SHOP THE WATERMELON, THIS CODE HERE IS JUST COPY AND PASTED. REMEBER TO LINK IN THE HTML
function nextImage(el){
	if (el.src.match("images/lemon_slot.PNG")){  
		el.src = "images/bar_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
			
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}

function nextImage(el){
	if (el.src.match("images/bar_slot.PNG")){  
		el.src = "images/cherry_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
			
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/bar_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}

function checkSlot(el){
	if (a.src.match("bar_slot") && b.src.match("bar_slot") && c.src.match("bar_slot")){
		mySound.play();
	} else {
		//i wish this function would work when all lights are yellow, or all are red...
	}
}
