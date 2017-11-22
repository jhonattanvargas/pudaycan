const express = require('express')
const app = express()
const helmet = require('helmet')
const path = require('path')
const exphbs = require('express-handlebars')
const config = require('./config') 

//Handlebars setup
app.engine(config.view.viewExt, exphbs({
    extname: config.view.viewExt
}))

//public
app.use(express.static(path.join(__dirname, config.view.publicPath)))

//View Engine Setup
app.set('views', path.join(__dirname, config.view.viewPath))
app.set('view engine', config.view.viewExt)

//Server
const server = require('http').Server(app)

app.get('/', (req,res) => {
    res.render('index',{
        layout:false
    })
})

app.get('/videos', (req,res) => {
    res.render('videos',{
        layout:false
    })
})

app.get('/galeria', (req,res) => {
    res.render('galeria',{
        layout:false
    })
})

//Run server
server.listen(config.port,()=>{
    console.log(`Server is now runing`)
})