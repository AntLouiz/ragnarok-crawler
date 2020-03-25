var request = require('request');
var cheerio = require('cheerio');

var monsters_ids = [];

request('http://www3.worldrag.com/database/?act=mobsearch&cid=on&id=1832', function(err, res, body) {
	if(err) console.log("Erro: "+err);

	var $ = cheerio.load(body);

  $('#ver_monstros option').each(function(index, el) {
    monsters_ids.push(el.attribs.value);
	});

  console.log(monsters_ids);

});

