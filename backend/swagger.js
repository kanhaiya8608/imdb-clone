const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'IMDb Clone API',
            version: '1.0.0',
            description: 'API documentation for IMDb Clone',
        },
        servers: [
            {
                url: 'http://localhost:5000', // Update with your server URL
                description: 'Development server',
            },
        ],
    },
    apis: [path.resolve(__dirname, './routes/*.js')], // Path to your API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
