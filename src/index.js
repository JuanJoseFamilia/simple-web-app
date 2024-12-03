const express = require('express');
const app = express();

// Rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app; // Exporta solo la aplicación
