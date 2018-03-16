function generateSummary( selector ) {
	$(selector).on('click', function () {
	let summaryText=$('#content strong').text();
	createSummary(summaryText);
	});

	function  createSummary( summaryText ) {
		//Create elements
		let summaryDiv=$('<div>');
		summaryDiv.attr('id','summary');
		let title=$('<h2>').text('Summary');
		let paragraph=$('<p>').text(summaryText);

		//Append elements
		summaryDiv.append(title);
		summaryDiv.append(paragraph);

		//append do parent
		let parent=$('#content').parent();
		parent.append(summaryDiv);
	}
}