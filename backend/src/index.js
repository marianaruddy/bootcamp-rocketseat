const express = require("express");

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    const { nome } = request.query;
    console.log(nome);
    return response.json([
        'p1',
        'p2',
    ]);
});

app.post('/projects', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json([
        'p1',
        'p2',
        'p3',
    ]);
});

app.put('/projects/:id', (request, response) => {
    const id = request.params;
    console.log(id);
    return response.json([
        'p1',
        'p2',
        'p3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'p1',
        'p2',
    ]);
});

app.listen(3333, () => {
    console.log('Back-end started!');
});
