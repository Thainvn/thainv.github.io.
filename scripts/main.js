var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');

	if(mySrc === 'images/nguyen_cam_mi_2.jpg') {
		myImage.setAttribute('src', 'images/nguyen_cam_mi_4.jpg');
	} else {
		myImage.setAttribute('src', 'images/nguyen_cam_mi_2.jpg');
	}
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('username')){
	setUsername();
} else {
	var username  = localStorage.getItem('username');
	myHeading.textContent = "Hello " + username;
}

myButton.onclick = function(){
	setUsername();
}

function setUsername(){

	var username = prompt('Please enter your name.');

	if(!username || username === null){
		setUsername();
	}else{
		localStorage.setItem('username', username);
		myHeading.textContent = "Hello " + username;
	}
	
}