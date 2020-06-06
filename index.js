const request = require('request')
const cheerio = require('cheerio')




// ---------- Extração
request('LINKAQUI', function (err, res, body) {
    if (err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);
    console.log('Elemento Pai:')
    $('.header-bottom .has-childs').each(function () {
        var title = $(this).attr('href')
        if(title != undefined){
        console.log('https:'+title)
        }
    })
    console.log('Filhos:')
    
    $('.header-bottom .not-has-childs').each(function () {
        var title = $(this).attr('href')
        if(title != undefined){
        console.log('https:'+title)
        }
    })

})
