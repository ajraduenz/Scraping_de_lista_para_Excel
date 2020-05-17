const request = require('request')
const cheerio = require('cheerio')

// ---------- Banco de Dados
const mysql = require('mysql')
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'jr',
    password : '12345678',
    database : 'filmes'
  })
// connection.connect(function(err) {
//     if (err) {
//       console.error('Erro de conexão: ' + err.stack)    
//     }else{   
//     console.log('Conectado como id ' + connection.threadId)
//     }
//     return
// })
// connection.query('SELECT * FROM filmes.filme;', function(err, rows, fields){
//     if(!err){
//         console.log('Resultado: ', rows)
//     }else{
//         console.log('Erro ao realizar a consulta')
//     }
// })

connection.connect(function(err){
    if(err) {
    console.error('Erro ao realizar a conexão com o BD: ' + err)}
    return
})

connection.query("INSERT INTO filme(nome) VALUES ('A volta dos que não foram')", function(err, result){
    if(!err){
        console.log('Filme cadastrado com sucesso')
    }else{
    console.log('Filme cadastrado com sucesso')
    }
})

// ---------- Extração
// request('https://www.imdb.com/chart/moviemeter', function(err, res, body) {
//     if (err) console.log('Erro: ' + err);

//     var $ = cheerio .load(body);

//     $('.lister-list tr').each(function(){
//         var title = $(this).find('.titleColumn a').text().trim()
//         var rating =$(this).find('.imdbRating strong').text().trim()

//         console.log('Titulo: ' + title)
//     })
    
// })