const express = require('express')
const app = express();
const multer = require('multer');
const router = express.Router('/');
const PORT = process.env.PORT || 3001;

app.all('*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization ,Accept');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', 'Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

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
    console.log(JSON.stringify(req.body, null, 2))
    res.status(200).send(JSON.stringify(req.body, null, 2));
})

console.log(`app is listening on port ${PORT}`);
app.listen(PORT)

module.exports = router


