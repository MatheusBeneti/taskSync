/*const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const users = require('./users')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

var checkAuth = function (req, res, next) {
  req.authStatus = true

  if (req.authStatus) {
    console.log('Está logado, pode continuar')
    next()
  } else {
    console.log('Não está logado, faça o login para continuar!')
  }
}

app.use(checkAuth)

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})



const http = require('http');
const express = require('express');
const app = express();
const path = require('path'); // Importe o módulo 'path' para manipulação de caminhos
const port = process.env.PORT || 3000;

/*http.createServer(function(request, response) {
  
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('Espanção de domínio, azure!');
}).listen(port);

app.use(express.static('public'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'home.html');
  res.sendFile(filePath);
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const basePath = path.join(__dirname, 'templates');

app.use(express.static('public'));
app.use(express.static('controllers'));

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'login.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(basePath, 'home.html')); 
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


