//Write a function that displays information about the arguments which
// are passed to it – type and value – and a summary about the number of each type.
//Input
//You will receive a series of arguments passed to your function.
//Output
//Log to the console the type and value of each argument passed in the following format:
//{argument type}: {argument value}
//Place each argument description on a new line.
// At the end print a tally with counts for each type in descending order,
// each on a new line in format {type} = {count} If two types have the same count,
// use order of appearance. Don’t print anything for types that do not appear in the
// list of arguments.

function result(  ) {
	 for (let i = 0; i < arguments.length; i++) {
	         let argValue = arguments[i];
	         console.log(`${typeof argValue}: ${argValue}`)

	     }
}
result('cat', 42, function () { console.log('Hello world!'); });

