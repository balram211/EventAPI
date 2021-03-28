const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://ticketmasterstefan-skliarovv1.p.rapidapi.com/addPaymentsToCart",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "e765fe0de7mshbe7240ee8043ca0p186470jsn150aed1120b7",
		"x-rapidapi-host": "Ticketmasterstefan-skliarovV1.p.rapidapi.com"
	},
	"data": {
		"apiKey": "<REQUIRED>",
		"pollingCallbackUrl": "<REQUIRED>",
		"cartId": "<REQUIRED>",
		"payments": "<REQUIRED>"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});