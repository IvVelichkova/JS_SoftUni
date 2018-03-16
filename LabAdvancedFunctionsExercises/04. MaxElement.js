//Write a JS program that takes an array of numeric elements as input and returns the largest element of the array.
//Input
//You will receive an array of numbers.
//	Output
//The output should be the return value of your function. It represents the largest element of the array.

function maxElement(arr) {
	return Math.max.apply(null, arr);
}

maxElement(([-3, -1, -34, -8, -50]))