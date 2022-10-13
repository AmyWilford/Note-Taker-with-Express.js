const app = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid')
// let db = require('../db/db.json')

app.get('/', (req, res)=>{
    let db = require('../db/db.json')
    console.log(db);
    console.info(`${req.method} request received. Notes loaded.`);
    // fs.readFile('../db/db.json', 'utf8', (err, data)=>{
    //     console.log(data);
    //     if (data) {
    //         res.status(200).json(JSON.parse(data))
    //     } else {
    //         res.status(404).json('could not load notes')
    //     }
    // })
    
    res.status(200).json(db);
        
    // QUESTION - confirming is ^ how to return the parsed JSON data?
});

app.post('/', (req, res)=>{
    let db = require('../db/db.json')
    const id = uniqid();
    const {title, text} = req.body;

    if (title && text && id) {
        const newNote = {
            title, 
            text,
            id
        };

        db.push(newNote);

        fs.writeFileSync('db/db.json', JSON.stringify(db), (err) =>{
            if(err) {
                res.status(404).json('Error encountered. Could not add your note');
        } else {
            console.info(`${req.method} request received. Your new note is entered`);
                const response = {
                status: 'Success. Note Added', 
                body: newNote,
                }
            res.status(200).json(response);
        }
    });
}}
)
module.exports = app;
