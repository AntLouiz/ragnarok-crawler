var request = require('request');
var cheerio = require('cheerio');

request('http://www3.worldrag.com/database/?act=mobsearch&cid=on&id=1832', function(err, res, body) {
	if(err) console.log("Erro: "+err);

	var $ = cheerio.load(body);

	$('#AllSearchResults table:first tbody').each(function() {
		var montersName = $('tr:first-child td:nth-child(3)').text().trim();
		console.log(montersName);
	});

});