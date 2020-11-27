const express= require('express');
const path= require('path');
const app= express();

app.use(express.static(path.join(__dirname, 'Assets')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) =>{
    res.render('index');
})

app.listen(3000, (err) =>{
    console.log(err);
    console.log('server running on port 3000');
});