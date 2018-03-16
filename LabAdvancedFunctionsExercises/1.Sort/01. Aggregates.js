//Write a JS program that uses a reducer function to display
// information about an input array.
//Input
//You will receive an array of numeric values.
//Output
//The output should be the printed on the console.
// Display the sum of all elements in the array, the value of the smallest,
// the value of the biggest,
// the product of all elements and a string of all elements joined together.
function aggregates( arr ) {
	function reduce( arr, func ) {
		let result = Number(arr[0]);
		for (let nextElement of arr.slice(1)) {
			result = func(result, nextElement);
			return result;
		}
	}

	console.log('Sum = ' + reduce( arr, ( a, b ) => a + b));
	console.log('Min = ' + reduce( arr, ( a, b ) => a > b ? b : a));
	console.log('Max = ' + reduce( arr, ( a, b ) => a > b ? a : b));
	console.log('Product = ' + reduce(arr, ( a, b ) => a * b));
	console.log('Join = ' + reduce(arr, ( a, b ) => '' + a + b));


}

let arr = [5, -3, 20, 7, 0.5]
aggregates(arr)