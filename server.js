const express = require('express');
const path = require('path');
const api = require('./routes/index')
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Construct URL route
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

// GET wildcard route to redirect to home page
app.get('*', (req,res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, ()=> 
    console.log(`App listening at http://localhost:${PORT}`)
);
