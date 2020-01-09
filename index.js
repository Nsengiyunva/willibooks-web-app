const express = require('express');
const cowsay = require('cowsay');
const cors = require('cors');

const app = express();
const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get('/api/cow/:say', cors(), async( req, res, next ) => {
    try {
        const text = req.params.say;
        const moo = cowsay.say({ text })
        res.json({ moo })
    } catch(err) {
        next( err )
    }
})

app.get('/api/cow/', cors(), async( req, res, next ) => {
    try {
        const moo = cowsay.say({ text: 'Hello world!' })
        res.json({ moo })
    } catch( err ){
        next( err )
    }
})

const PORT = process.env.PORT || 5000
app.listen( PORT, () => {
    console.log(`Mixing it up on port ${PORT}`)
})