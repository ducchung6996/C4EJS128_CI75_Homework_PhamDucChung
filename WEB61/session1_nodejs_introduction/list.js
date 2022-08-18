const express = require('express');
const listRouter = express.Router();

const list = [
    {name: 'lmao', age: 6},
    {name: 'bruh', age: 7},
    {name: 'lol', age: 8},
];

// listRouter.get('/', (req, res) => {
//     res.json(list);
// });

listRouter.get('/add', (req, res) => {
    list.push({name: 'bruh', age: 9});
    res.json(list);
});

listRouter.get('/:id', (req, res) => {
    const id = req.params.id - 1;
    const item = list[id];
    res.json(item);
});

listRouter.get('/', (req, res) => {
    const name = req.query.name;
    const age = Number(req.query.age);
    const filteredList = list.filter(student => student.name === name && student.age === age);
    res.json(filteredList);
    console.log(name);
    console.log(age);
});

module.exports = listRouter;