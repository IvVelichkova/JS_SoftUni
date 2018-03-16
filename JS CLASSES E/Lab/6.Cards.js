( ()=> {
	let Suits = {
		SPADES: '♠',
		HEARTS: '♥',
		DIAMONDS: '♦',
		CLUBS: '♣'
	}


	class Card {

		constructor( face, suit ) {
			this.face = face;
			this.suit = suit;
		}

		get face() {
			return this._face;
		}

		set face( value ) {
			if (!Card.validFaces.includes(value)) {
				throw new RangeError('Invalid face');
			}
			this._face = value;
		}

		get suit() {
			return this._suit;
		}

		set suit( value ) {
			if (!Object.keys(Suits).map(k => Suits[k]).includes(value)) {
				throw new Error("Ïnvalid suit")
			}
			this._suit = value;
		}

		static get validFaces() {
			return Card._validFaces;
		}

		toString() {
			return this._face + this._suit;
		}
	}
	Card.validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	return {Suits,Card}
})()
let card1 = new Card('Q', Suits.CLUBS);
console.log(card1.toString())