const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Notes API'
    },
    host: 'notes-final-project-cse-341.onrender.com',
    // host: 'localhost:8080',

    //always remember to change http below to
    //https when you change host from local to render
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);


// Remember for swagger 
// npm install swagger-ui-express
// npm install --save-dev swagger-autogen
// npm run swagger-autogen