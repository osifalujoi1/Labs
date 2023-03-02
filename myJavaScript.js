function alertOnButton() {
	let color = document.getElementById('userColor').value;
	let webpage = document.getElementById('myWebpage');

	webpage.style = "background-color: " + color + ";";
}