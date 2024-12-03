const app = require('../src/index');
const port = process.env.PORT || 3000;

// Solo inicia el servidor si no es un entorno de prueba
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}
