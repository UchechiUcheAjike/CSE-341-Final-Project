const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes');
// const validation = require('../middleware/validate');

// eslint-disable-next-line no-undef
router.get('/', notesController.getAll);

// eslint-disable-next-line no-undef
router.get('/:id', notesController.getSingle);

// // eslint-disable-next-line no-undef
// router.post('/', validation.saveJob, jobsController.createJob);
router.post('/', notesController.createNote);


// // eslint-disable-next-line no-undef
// router.put('/:id', validation.saveJob, jobsController.updateJob);

// // eslint-disable-next-line no-undef
// router.delete('/:id', jobsController.deleteJob);

module.exports = router;