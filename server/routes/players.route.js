const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=>{
    console.log('/todo Get');
    const queryString = `SELECT * FROM "team1"`
    pool.query(queryString).then((results)=>{
        res.send(results.rows);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

router.post('/', (req, res)=>{
    console.log('/todo post', req.body);
    res.send('odano')
    // const queryString = `SELECT * FROM "team1"`
    // pool.query(queryString).then((results)=>{
    //     res.send(results.rows);
    // }).catch((err)=>{
    //     console.log(err);
    //     res.sendStatus(500);
    // })
})



module.exports = router;