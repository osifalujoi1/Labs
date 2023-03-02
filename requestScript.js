let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.weather.gov/gridpoints/TOP/37,84/forecast', true);

xhr.onload = function() {
	if (xhr.status === 200){
		let data = JSON.parse(xhr.responseText);
		console.log(data);
	} else {
		console.error('Request failed. Status: ', xhr.status);
	}
};

xhr.send();