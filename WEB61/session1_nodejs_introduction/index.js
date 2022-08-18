const express = require('express');
const listRouter = require('./list');

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.use('/list', listRouter);

app.listen(3000, () => {
    console.log('success on port 3000');
});

