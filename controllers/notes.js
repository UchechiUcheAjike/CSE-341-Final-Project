const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
  mongodb
    .getDb()
    .db()
    .collection('notes')
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json({
          message: err
        });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
};

const getSingle = (req, res) => {
  /* #swagger.parameters['parameterName'] = {
        in: <string>,
        description: <string>,
        required: <boolean>,
        type: <string>,
        format: <string>,
        schema: <array>, <object> or <string>
} */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid Note id to find a note.');
  }
  const noteId = new ObjectId(req.params.id);
  mongodb
    .getDb()
    .db()
    .collection('notes')
    .find({
      _id: noteId
    })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({
          message: err
        });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    });
};

const createNote = async (req, res) => {
  const note = {
    userId: req.body.userId,
    title: req.body.title,
    createDate: req.body.createDate,
    updateDate: req.body.updateDate,
    classification: req.body.classification,
    completed: req.body.completed,
    content: req.body.content
  };
  const response = await mongodb.getDb().db().collection('notes').insertOne(note);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the note.');
  }
};

const updateNote = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid Note id to update a note.');
  }
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const note = {
    userId: req.body.userId,
    title: req.body.title,
    createDate: req.body.createDate,
    updateDate: req.body.updateDate,
    classification: req.body.classification,
    completed: req.body.completed,
    content: req.body.content
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('notes')
    .replaceOne({
      _id: userId
    }, note);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the note.');
  }
};

const deleteNote = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid Note id to delete a note.');
  }
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('notes').remove({
    _id: userId
  }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the note.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createNote,
  updateNote,
  deleteNote
};