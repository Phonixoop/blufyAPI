const express = require('express')
const app = express();
const multer = require('multer');
const router = express.Router('/');
const PORT = process.env.PORT || 3001;

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

app.get('/feedback', (req, res) => {
    res.status(200).send('it is working... 🤗');
})

app.post('/feedback', multer().none(), (req, res) => {
    res.status(200).send('work again ' + req.body.name);
})

console.log(`app is listening on port ${PORT}`);
app.listen(PORT)

module.exports = router