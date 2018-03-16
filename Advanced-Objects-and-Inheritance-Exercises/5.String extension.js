(function solve() {
	Array.prototype.last = function () {
		return this[this.length - 1];
	};


	String.prototype.ensureStart = function ( word ) {
		let r;
		return this.r += `${word}`;
		console.log(this.r += `${word}`)
	};


})();


let str = 'my string'
str = str.ensureStart('my')
