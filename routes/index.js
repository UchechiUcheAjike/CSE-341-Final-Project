// const express = require('express');
// const router = express.Router();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));
// router.use('/', require('./swagger'));
// router.use('/notes', require('./notes'));

// module.exports = router;

const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/notes', require('./notes'));

module.exports = router;