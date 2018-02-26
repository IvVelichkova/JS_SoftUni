function delimiter( matrixArr, commandsArr ) {
	let matrixRow = matrixArr.toString().split(/\,/g);
	let matrixCol=matrixRow.toString().split(/\s+/g);
	let cmdArr = commandsArr.toString().split(/\,/g);

	let r = 0;
	let c = 0;
	let res = [];
	let galeFunc = 0;

	let max = 50;
	for (let c = 0; c < cmdArr.length; c++) {
		let obj = cmdArr[c];
		let current = obj.split(/\s+/g)
		let cmd = current[0]
		let steps = Number(current[1]);

		if (cmd === 'smog') {

			for (let i = 0; i < matrixRow.length; i++) {
				let cols=matrixRow[i].split(' ');
				for (let k = 0; k < cols.length; k++) {
					matrixRow[i][k] += steps;
				}
			}
		}

		 if (cmd === 'gale') {
			for (let i = 0; i < matrixRow.length; i++) {
				let cols=matrixRow[i].split(' ');
				for (let k = 0; k < cols.length; k++) {

						matrixRow[i][steps] -= 20;


				}
			}
		}

		 if (cmd === 'breeze') {
			for (let i = 0; i < matrixRow.length; i++) {
				let row = matrixRow[i].split(' ');
				for (let k = 0; k < 5; k++) {

						matrixRow[steps][k] -= 15;
						let n=Number(matrixRow[steps][k]);


				}

			}
		}


		for (let i = 0; i < matrixRow.length; i++) {
			for (let k = 0; k < cols.length; k++) {
				let col = Number(matrixRow[i][k]);
				let numberI = i;
				let numberK = k;


				if (col >= 50) {

					res.push(`[${numberI} - ${numberK}`)
				}
			}

		}
	}
console.log(res.join(','))


}

delimiter([
	"5 7 2 14 4",
	"21 14 2 5 3",
	"3 16 7 42 12",
	"2 20 8 39 14",
	"7 34 1 10 24"
],
	[
		"breeze 1", "gale 2", "smog 35"
	])