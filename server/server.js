//requires
const express=require('express');
const app = express();
const players =require('./routes/players.route')
const bodyParser = require('body-parser')
//uses
app.use( bodyParser.urlencoded( {extended:true}));
app.use( bodyParser.json() );
app.use('/players', players)

//globals
const port = 5000;

//spin up server
app.listen(port, ()=>{
    console.log('server up on:', port);
})