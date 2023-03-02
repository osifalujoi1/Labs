function findLargestNumber(numbers) {
	let largest = numbers[0];

	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > largest){
			largest = numbers[i];
		}
	}

	return largest;
}