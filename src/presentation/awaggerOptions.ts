

const swaggerOptions = {
    definition: {
      
      openapi: '3.1.0', // Asegúrate de que el valor sea una cadena válida para OpenAPI 3.x
      swagger: '2.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentation for your API',
      },
      servers: [
        {
          url: 'http://localhost:3000', // Reemplaza con la URL de tu servidor
        },
      ],
    },
    apis: ['./presentation/routes.ts'], // Reemplaza con la ubicación de tus archivos de rutas
  };
  
  module.exports = swaggerOptions;
  