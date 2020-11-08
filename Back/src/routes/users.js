const express = require('express');
const router = express.Router();
const pool = require('../db');


//Get all users
router.get('/all', (req, res) => {
    console.log("Select all users: ")

    const queryString = "SELECT * FROM users"
    pool.query(queryString,(err, rows, fields) => {
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

//Get user by Id

router.get('/get/:id', (req, res) => {
    //Conexion
    console.log("Getting user..")

    const id = req.params.id

        const queryString = "SELECT * from users WHERE Id = ?"
        pool.query(queryString, [id], (err, rows, fields) => {
            if (err) {
                console.log("Error while selecting user: " + err)
                res.json({ status: 500 })
                res.end()
                return
            }
            console.log("Entrenamientos Seleccionados")
            res.json(rows)
        })

    });


//Create user

router.post('/add', (req, res) =>{

    console.log("Adding user..")
    console.log("Name: " + req.body.Name)

    const name = req.body.Name

    const queryString = "INSERT INTO users (Name)  VALUES  (?)"
    pool.query(queryString, [name], (err, results, fields) =>{
        if (err){
            console.log("Error, the user: "+ err)
            res.sendStatus(500)
            return
        }
        res.sendStatus(200)
        console.log("User added with id: ", results.insertId);
        res.end() 
        
    } )
});

//Update users

router.put('/update/:id', (req, res) => {
    //Conexion
    console.log("Updating user..")
    console.log("Name = "+ req.body.Name)

    const id = req.params.id
    const name = req.body.Name

        const queryString = "UPDATE users SET Name = ? WHERE Id = ?"
        pool.query(queryString, [name, id], (err, results, fields) => {
            if (err) {
                console.log("Error while updating user: " + err)
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

//Delete user

router.delete('/delete/:id', (req, res) => {
    //Conexion
    console.log("Deleting user with Id: " + req.params.id)


    const id = req.params.id

        const queryString = "DELETE FROM users WHERE Id = ?"
        pool.query(queryString, [id], (err, results, fields) => {
            if (err) {
                console.log("Not such user: " + err)
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