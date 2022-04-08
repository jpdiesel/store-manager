require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const productsRoutes = require('./routes/productsRoutes');
const salesRoutes = require('./routes/salesRoutes');

app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
