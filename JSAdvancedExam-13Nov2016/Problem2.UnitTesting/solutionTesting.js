const createList = require('./script');
const expect = require('chai').expect;


describe("createList", function () {
	let list;

	beforeEach(function () {
		list = createList();
	});
	describe("add", function () {
		it("can add multiple", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			const str = list.toString();
			expect(str).to.equal('pesho, gosho, 5')
		});
	});
	describe("toString", function () {
		it("return toString Format", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			const str = list.toString();
			expect(str).to.equal('pesho, gosho, 5')
		});
	});
	describe("shiftLeft", function () {
		it("shift Left corectly", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.shiftLeft();
			const str = list.toString();
			expect(str).to.equal('gosho, 5, pesho')
		});
	});

	describe("shiftRight", function () {
		it("shift Right corectly", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.shiftRight();
			const str = list.toString();
			expect(str).to.equal('5, pesho, gosho')
		});
	});
	describe("swap", function () {
		it("swap corectly", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			list.swap(0, 1);
			const str = list.toString();
			expect(str).to.equal('gosho, pesho, 5, ivan')
		});
		it("swap return false- index1 negative,toString return", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = -2;
			let index2 = 3;
			list.swap(index1, index2);
			let value = false;
			expect(value).to.equal(false);
			expect(list.toString()).to.equal('pesho, gosho, 5, ivan')
		});
		it("swap return false index1 is not int", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = 1.5;
			let index2 = 3;
			list.swap(index1, index2);
			let value = false;
			expect(value).to.equal(false);
			expect(list.toString()).to.equal('pesho, gosho, 5, ivan');
		});
		it("swap return false index1 is out of range array", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = 5;
			let index2 = 2;
			list.swap(index1, index2);
			let value = false;
			expect(value).to.equal(false);
			expect(list.toString()).to.equal('pesho, gosho, 5, ivan');

		});

		it("swap return true index2 is equal zero", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = 1;
			let index2 = 0;

			let value = list.swap(index1, index2);
			expect(value).to.equal(true);
			expect(list.toString()).to.equal('gosho, pesho, 5, ivan');
		});
		it("swap return true index1 is equal zero", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = 0;
			let index2 = 1;
			let value = list.swap(index1, index2);
			expect(value).to.equal(true);
			expect(list.toString()).to.equal('gosho, pesho, 5, ivan');
		});

		it("swap return false index2 negative", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = 1;
			let index2 = -1;
			list.swap(index1, index2);
			let value = false;
			expect(value).to.equal(false);
			expect(list.toString()).to.equal('pesho, gosho, 5, ivan');
		});
		it("swap return false index2 is not int", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = 1;
			let index2 = '1';
			list.swap(index1, index2);
			let value = false;
			expect(value).to.equal(false);
			expect(list.toString()).to.equal('pesho, gosho, 5, ivan');
		});
		it("swap return false index2 is out of range array", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = 1;
			let index2 = 6;
			list.swap(index1, index2);
			let value = false;
			expect(value).to.equal(false);
			expect(list.toString()).to.equal('pesho, gosho, 5, ivan');

		});
		it("swap return false index2 is equal to arr.lenght", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = 1;
			let index2 = 4;
			list.swap(index1, index2);
			let value = false;
			expect(value).to.equal(false);
			expect(list.toString()).to.equal('pesho, gosho, 5, ivan');

		});

		it("swap return false if index1===index2", function () {
			list.add('pesho');
			list.add('gosho');
			list.add(5);
			list.add('ivan');
			let index1 = 0;
			let index2 = 0;
			list.swap(index1, index2);
			let value = false;
			expect(value).to.equal(false);
			expect(list.toString()).to.equal('pesho, gosho, 5, ivan');

		});


	});
});