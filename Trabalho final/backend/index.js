const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ItemsController = require('./controllers/ItemsController');
const DepositosController = require('./controllers/DepositosController');
const AreasController = require('./controllers/AreasController');
const UsuariosController = require('./controllers/UsuariosController');

const app = express();
const port = 3000;

app.use(cors({ origin: true }));
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => res.send('<h1>Deposito</h1><a href="https://deposito.docs.apiary.io">Acesse a documentação da API<a>'));
app.use('/items', ItemsController);
app.use('/depositos', DepositosController);
app.use('/areas', AreasController);
app.use('/usuarios', UsuariosController);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));