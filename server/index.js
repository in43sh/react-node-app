const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const items_controller = require('./controllers/items_controller');

app.post('/item/create', items_controller.createItem);
app.get('/items', items_controller.getAllItems);
app.get('/item/get/:id', items_controller.getSingleItem);
app.put('/item/update/:id', items_controller.updateItem);
app.delete('/item/delete/:id', items_controller.destroyItem);

const port = process.env.PORT || 3000;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );