const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views')

app.listen('3000', () => { console.log('Server start !'); })


app.get('/', (req, res) => {
    res.render('home')
})