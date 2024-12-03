const request = require('supertest');
const app = require('../src/index'); // Ruta correcta del archivo de la aplicación

describe('index tests', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World!');
  });

  it('should start the server in non-test environment', () => {
    const mockListen = jest.fn(); // Creamos un mock para listen

    // Usamos spyOn para espiar la función listen de app
    jest.spyOn(app, 'listen').mockImplementation(mockListen);

    process.env.NODE_ENV = 'development'; // Aseguramos que estamos en desarrollo
    require('../src/Server'); // Requerimos el archivo Server para ejecutar la inicialización

    expect(mockListen).toHaveBeenCalled(); // Verificamos que listen haya sido llamado
  });
});
