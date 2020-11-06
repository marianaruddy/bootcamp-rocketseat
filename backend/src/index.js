const express = require("express");

const app = express();

app.get('/projects', (request, response) => {
    return response.json([
        'p1',
        'p2',
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'p1',
        'p2',
        'p3',
    ]);
});

app.put('/projects/:id', (request, response) => {
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
