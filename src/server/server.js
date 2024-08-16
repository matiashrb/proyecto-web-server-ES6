
import express from 'express' //ET6
//const express = require('express')
//const path = require('path')
import path from 'path' //ET6


//ET6
export const startServer = (options) => {
    const { port, public_path = 'public' } = options
    
    const app = express() //Inicializamos express

    app.use(express.static(public_path)) // contenido estatico disponible HTML, CSS Y Javascript

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath) //Devolver el HTML
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    }) //Arranque del servidor

}

