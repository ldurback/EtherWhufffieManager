function init() {
	// get stats
	getStats();

	// wait 0.5s, then update the status fields
	setTimeout(updateStatusFields, 500);


	$("#inputAddress").click(function(event) {
		// get new address from input
		address = $("#newAddress").val();
	
		// update address text field
		$("#address").text(address);
		
		// get stats
		getStats();

		// wait 0.5s, then update the status fields
		setTimeout(updateStatusFields, 500);
	});

	$("#sendPWhuffies").click(function(event) {
		amount = parseInt($("#pWhuffiesToSend").val());
		message = $("#pMessage").val();

		sendPositiveWhuffies(amount, message);

		// get stats in 1s
		setTimeout(getStats, 1000);

		// wait 2s, then update the status fields
		setTimeout(updateStatusFields, 2000);

	});

	$("#sendNWhuffies").click(function(event) {
		amount = parseInt($("#nWhuffiesToSend").val());
		message = $("#nMessage").val();

		sendNegativeWhuffies(amount, message);

		// get stats in 1s
		setTimeout(getStats, 1000);

		// wait 2s, then update the status fields
		setTimeout(updateStatusFields, 2000);

	});

}

function updateStatusFields() {
	pWhuffies = stats[0].toNumber();
	nWhuffies = stats[1].toNumber();
	tWhuffies = stats[0].minus(stats[1]).toNumber();

	$("#positiveWhuffies").text(pWhuffies);
	$("#negativeWhuffies").text(nWhuffies);
	$("#totalWhuffies").text(tWhuffies);
}