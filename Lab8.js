//function to determine whether a string is a palindrome
function palindrome(str) {
	str = str.toLowerCase();
	var len = str.length;
	var mid = Math.floor(len/2);

	for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;

}

//function to list all files in a directory
const fs = require(path);
fs.readdir(path, (err, files) => {
  if (err) {
    console.err;
  }else{
  	console.log(files);
  }
});

//function to read the contents of a file asynchronously
const files = require('fs');

function readFile(path){
	files.readFile(path, 'utf8', function(err, data){
		if (err){
			console.error(err);
		} else{
			console.log(data);
		}
	});
}

//Install an external dependency for making HTTP requests
const request = require('request');
function makeRequest(url){
	request(url, function(err, res, body){
	if(err) {
		console.error(err);
	}else{
		console.log('Status:', res.statusCode);
		console.log('Response:', body);
	}
});
}