const router = require('express').Router();
const pool = require('../modules/pool');


router.delete('/:id', (req, res)=>{
    console.log('/todo delete', req.params);
    const queryString = `DELETE FROM "team1" WHERE id=$1;`
    const values = [req.params.id];
    pool.query(queryString, values).then((results)=>{
        res.send(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

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
    const queryString = `INSERT INTO "team1"("name","position","bio") VALUES ($1, $2, $3);`
    const values = [req.body.name, req.body.position, req.body.bio];
    pool.query(queryString, values).then((results)=>{
        res.send(results.rows);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})



module.exports = router;