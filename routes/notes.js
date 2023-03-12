const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notes');
const validation = require('../middleware/validate');

// eslint-disable-next-line no-undef
router.get('/', notesController.getAll);

// eslint-disable-next-line no-undef
router.get('/:id', notesController.getSingle);

// // eslint-disable-next-line no-undef
router.post('/', validation.saveNote, notesController.createNote);
// router.post('/', notesController.createNote);


// // eslint-disable-next-line no-undef
router.put('/:id', validation.saveNote, notesController.updateNote);
// router.put('/:id', notesController.updateNote);

// // eslint-disable-next-line no-undef
router.delete('/:id', notesController.deleteNote);

module.exports = router;



