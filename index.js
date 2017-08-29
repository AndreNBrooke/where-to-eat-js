function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

function getRestaurant(){
	// Stop startRandom function
	clearInterval(changeRest);
	// if first time running getRestaurant run following
	var para = document.createElement("P");
	var decision = document.createTextNode("Let's go to " + chosen_restaurant + " today!");
	var center = document.getElementById("center");
	debugger
	para.appendChild(decision);
	center.appendChild(decision);
	// else
	// debugger
	//para.appendChild(decision);
	// appendchild 'circle' with <p>Lets eat at  #{restaurant}</p>
}
function changeRestaurant(){
	// Create array of restaurants
	restaurantArray = ['Mixed Rice','Nasi Kukus','Chinese hawker','Packed lunch','McRonalds'];
	colorArray = ['Red', 'Blue', 'Green', 'Purple', 'Pink'];
	arrayLength = restaurantArray.length;
	rand = getRandomInt(0, arrayLength);
	console.log(rand);
	// innerHTML restaurant
	restaurant = document.getElementById('restaurant');
	debugger
	restaurant.style.color = colorArray[rand];
	restaurant.innerHTML= restaurantArray[rand];
	chosen_restaurant = restaurant.innerHTML;
}

function startRandom(){
	changeRest = setInterval(changeRestaurant, 1000);
	
	// set color attribute of each element
	// insert restaurant name before circle
}

function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", startRandom);

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", getRestaurant);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);