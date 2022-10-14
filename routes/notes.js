const notes = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid')
// let db = require('../db/db.json')


notes.get('/', (req, res)=>{
    let db = require('../db/db.json')
    console.info(`${req.method} request received. Notes loaded.`);
    fs.readFile('db/db.json', 'utf8', (err, data)=>{
        if (data) {
            res.status(200).json(JSON.parse(data))
        } else {
            res.status(404).json('could not load notes')
        }
    })
});

notes.post('/', (req, res)=>{
    db = require('../db/db.json')
    const {title, text} = req.body;

    if (title && text) {
        const newNote = {
            title, 
            text,
            id: uniqid()
        };
        db.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(db), () =>{
                console.info(`${req.method} request received. Your new note is entered`);
                const response =  {
                status: 'Success. Note Added', 
                body: newNote,
                };
                res.status(200).json(response);
        } 
    );       
}
else {
    res.status(404).json('Error encountered. Could not add your note');
}}
)
notes.delete('/:id', (req, res) =>{
    res.send('Delete request called');
    // let db = require('../db/db.json')
    // console.log("req params", req.params.id)
    // db = db.filter(({ id }) => id !== req.params.id);
    // console.log(db);
    // fs.writeFileSync('./db/db.json', JSON.stringify(db), () =>{
    // res.status(200).json('Note Deleted')
// });
});

module.exports = notes;
