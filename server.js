const express = require('express');
const bodyParser= require('body-parser');
const db = require('./db');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.post('/login', (req,res)=>{
    const {usuario,contrasena}= req.body;
    const sql = 'SELECT * FROM Usuarios WHERE usuario = ? AND contrasena=?';
    db.query(sql,[usuario, contrasena], (err, resultados)=>{
        if(err)throw err;
        if(resultados.length>0){
            res.send('Inicio de sesion exitoso');
        }
        else{
            res.send("Credenciales incorrectas");
        }
    });
});
app.listen(3000,()=>{
    console.log('Servidor corriendo en http://localhost:3000');
});