const express = require('express')
const app =  express()
const port = 3000
const morgan = require('morgan');
const handlebars = require('express-handlebars')
const path = require('path')
// load file tinh
app.use(express.static(path.join(__dirname,'public')))
//Template engine
app.engine('hbs',handlebars.engine({
    extname:'hbs'
}))
app.set('view engine','hbs') 
app.set('views',path.join(__dirname,'resources/views'))
//http loger 
app.use(morgan('combined'))
var check = false
function myFunction()
{
    console.log("Hàm đã được gọi!");
    app.use(express.static(path.join(__dirname,'src')))
    check = true
}
app.get('/',(req,res)=>{
    res.render('home')
    if(check)
    {
        
        app.use(express.static(path.join(__dirname,'public')))
        res.redirect('/img/logo.jpg')
    }
})

app.get('/news',(req,res) => res.render('news'))
app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))
