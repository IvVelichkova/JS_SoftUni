function createBook(selector,title,bookeAuthor,isbn  ) {
	let id=1;

	let bookGenerator=(function () {

		return function (selector,title,bookeAuthor,isbn  ) {
			let container=$(selector);
			let bookContainer=$('<div>');
			bookContainer.attr("id",`book${id}`);
			bookContainer.css("style","none");
			$(`<p class="title">${title}</p>`)
				.appendTo(bookContainer);
			$(`<p class="author">${bookeAuthor}</p>`)
				.appendTo(bookContainer);
			$(`<p class="isbn">${isbn}</p>`)
				.appendTo(bookContainer);
			let selectBtn = $('<button>Select</button>');
			let deselectBtn=$('<button>Deselect</button>');
			selectBtn.on("click",()=>
				bookContainer.css("border","2px solid blue"));

			deselectBtn.on("click",()=>
				bookContainer.css("border","none"));
			selectBtn.appendTo(bookContainer);
			deselectBtn.appendTo(bookContainer);
			bookContainer.appendTo(container);
			id++;

		};
	}());
	bookGenerator(selector,title,bookeAuthor,isbn )
}