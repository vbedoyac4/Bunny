const express = require('express');
const router = express.Router();
const pool = require('../db');

//Tasks by user

router.get('/byuser/:user_id', (req, res) => {
    
    console.log("Select task for user with Id: " + req.params.user_id)

    const id = req.params.user_id

    const queryString = "SELECT * FROM users_tasks WHERE user_id = ?"
    pool.query(queryString,[id],(err, rows, fields) => {
        if(err){
            console.log("No users found " + err)
            res.sendStatus(500)
            res.end()
            return
        }
        console.log("Users Selected")
        res.json(rows)
    })
});

//Create task

router.post('/add', (req, res) =>{

    console.log("Adding task..")
    console.log("Description: " + req.body.description)
    console.log("State: " + req.body.state)
    console.log("User_Id: " + req.body.user_id)

    const description = req.body.description
    const state =  req.body.state
    const user_id = req.body.user_id

    const queryString = "INSERT INTO users_tasks (description, state, user_id)  VALUES  (?, ?, (SELECT Id FROM users WHERE Name = ?))"
    pool.query(queryString, [description, state, user_id ], (err, results, fields) =>{
        if (err){
            console.log("Error, the task: "+ err)
            res.sendStatus(500)
            return
        }
        res.sendStatus(200)
        console.log("Task added with id: ", results.insertId);
        res.end() 
        
    } )
});

//Update task

router.put('/update/:id', (req, res) => {
    //Conexion
    console.log("Updating task..")
    console.log("Description: " + req.body.description)
    console.log("State: " + req.body.state)

    const id = req.params.id
    const description = req.body.description
    const state =  req.body.state

        const queryString = "UPDATE users_tasks SET description = ?, state = ? WHERE id = ?"
        pool.query(queryString, [description, state, id], (err, results, fields) => {
            if (err) {
                console.log("Error while updating task: " + err)
                res.sendStatus(400)
                return
            }
            res.status(200).json({
                ok: true,
                respuesta: results.affectedRows
            });
            res.end()
        })

    });

//Delete task

router.delete('/delete/:id', (req, res) => {
    //Conexion
    console.log("Deleting task with Id: " + req.params.id)


    const id = req.params.id

        const queryString = "DELETE FROM users_tasks WHERE Id = ?"
        pool.query(queryString, [id], (err, results, fields) => {
            if (err) {
                console.log("Not such task: " + err)
                res.sendStatus(400)
                return
            }
            res.status(200).json({
                ok: true,
                respuesta: results.affectedRows
            });
            res.end()
        })

    });


module.exports = router;