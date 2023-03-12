
const validator = require('../helpers/validate');

const saveNote = (req, res, next) => {
    const validationRule = {
        userId: 'required|string',
        title: 'required|string',
        createDate: 'required|string',
        updateDate: 'required|string',
        classification: 'required|string',
        completed: 'required|string',
        content: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveNote
};


// Run the following commands to make the validate work 
// npm install body-parser --save
// npm install express-validator cors --save
// node sever.js

// If does not work run the following command
// npm i -S validator
