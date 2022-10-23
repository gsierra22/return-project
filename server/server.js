//requires
const express=require('express');
const app = express();
const players =require('./routes/players.route')
//uses
app.use('/players', players)

//globals
const port = 5000;

//spin up server
app.listen(port, ()=>{
    console.log('server up on:', port);
})