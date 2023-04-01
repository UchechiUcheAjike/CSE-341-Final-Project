/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

const db = require('../db/connect')
const notes = require('../controllers/notes');
const {initDb, getDb, closeDb} = require('../db/connect')

let temp_db = null;

beforeAll(async () => {
  temp_db = await initDb();
})

afterAll(() => {
  closeDb();
})

test('Get Request', async () => {
  const response = await fetch('/notes');
  const data = await response.json();
  console.log(data)
  expect(true).toBe(true);
});

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('notes.getAll() returns correct length', () => {
  const allNotes = notes.getAll();
  expect(allNotes.length).toBe(3);
});









// const db = require('../db/connect')
// const notes = require('../controllers/notes');
// let x = null;
// beforeAll(async () => {

//   // x = await db.initDb()
//   await db.initDb((err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       app.listen(port);
//       console.log(`Connected to DB and listening on ${port}`);
//     }
//   });
//   console.log(x)
// })

// afterAll( async () => {
//   await db.closeDb();
// })





//test('Get Request', async () => {
//  const response = await fetch('/notes');
//  const data = await response.json();
//  console.log(data)
//  expect(true).toBe(true);
//});

//test('adds 1 + 2 to equal 3', () => {
//  expect(1 + 2).toBe(3);
//});

// test('notes.getAll() returns correct length', () => {
//   const allNotes = notes.getAll();
//   expect(allNotes.length).toBe(3);
// });
