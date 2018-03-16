//Write a higher-order JS function that fixes some
// of the parameters of another function.
// Your program will receive a function that takes 4 parameters
// and returns a formatted string (a monetary value with currency
// symbol). Your task is to return another function that
// only takes one parameter and returns the same formatted string.





function formatCurrency(separator, symbol, symbolFirst, value) {
	let result = Math.trunc(value) + separator;
	result += value.toFixed(2).substr(-2,2);
	if (symbolFirst) return symbol + ' ' + result;
	else return result + ' ' + symbol;
}

function getDollarFormatter(formatter) {
	function dollarFormatter(value) {
		return formatter(',', '$', true, value);
	};

	return dollarFormatter;
}




let formatter = getDollarFormatter(formatCurrency);
console.log(formatter(5345))