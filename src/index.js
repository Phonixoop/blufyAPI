const express = require('express')
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;
app.post('/feedback', (req, res) => {
    res.json(JSON.stringify(req.body));
})

console.log(`app is listening on port ${PORT}`);
app.listen(PORT)