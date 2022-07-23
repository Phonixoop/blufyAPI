const express = require('express')
const app = express();
const router = express.Router();
app.post('/feedback', (req, res) => {
    res.json(JSON.stringify(req.body));
})

app.listen(3001)