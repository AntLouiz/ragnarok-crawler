var request = require('request');
var cheerio = require('cheerio');

const BASE_URL = 'http://www3.worldrag.com/database/'

const categories = {
  'monsters': {'action': '?act=viewmob&displayorder=1'}
}


function get_monsters_data() {
  var monsters_links = [];

  request(BASE_URL + categories['monsters']['action'], function(err, res, body) {
    if(err) console.log("Erro: "+err);

    var $ = cheerio.load(body);

    $('.alignment1 tbody tr td:nth-child(2) a').each(function(index, el) {
      monsters_links.push(el.attribs.href)
    });

    console.log(monsters_links);
  });
}


get_monsters_data()
