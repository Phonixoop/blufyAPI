const express = require('express')
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/feedback', (req, res) => {
    res.status(200).send('it is working... 🤗');
})

app.post('/feedback', (req, res) => {
    res.status(200).send('work again ' + JSON.stringify(req.body));
})

console.log(`app is listening on port ${PORT}`);
app.listen(PORT)