const express = require('express');
const path = require('path');
const api = require('./routes/index')
const PORT = 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// this is constructing the URL route
app.use('/api', api);
app.use(express.static('public'));

// GET route for home page ->static
app.get('/', (req,res) =>
res.sendFile(path.join(__dirname, './public/index.html')),
);

// GET route for notes page ->static
app.get('/notes', (req, res)=>
res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req,res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, ()=> 
    console.log(`App listening at http://localhost:${PORT}`)
);
