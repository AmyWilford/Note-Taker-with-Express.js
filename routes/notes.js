const notes = require('express').Router();
const fs = require('fs');

notes.get('/notes', (req, res)=>{
    console.info(`${req.method} request received. These are your notes.`);
    // QUESTION : DIFFERENCE BETWEEN READFILE AND READFROMFILE IN CLASS EXAMPLE.
    fs.readFile('../db/db.json').then((data)=>res.json(JSON.parse(data)))
    // QUESTION - confirming is ^ how to return the parsed JSON data?
});

notes.post('/notes', (req, res)=>{
    console.info(`${req.method} request received. Your new note is entered`);
    const {title, text} = req.body;

    if (title && test) {
        const newNote = {
            title, 
            text
            //unique_id
        };

        readAndAppend(newNote, '../db/db.json');

        const response = {
            status: 'Success. Note Added', 
            body: newNote,
        };
        res.json(response);
    } else {
        res.json('Error encountered. Could not add your note');
    }
})
module.exports = notes;
