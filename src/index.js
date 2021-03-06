const express = require('express');

const app = express()

app.use(express.json())

app.get('/projects', (request, response)=>{

    const { title, owner} = request.query;

    console.log(title);
    console.log(owner)

    return response.json([
        'Project One',
        'Project Two',
    ]);
});

app.post('/projects', (request, response)=>{

    const body = request.body;

    console.log(body)
    
    return response.json([
        'Project One',
        'Project Two',
        'Project Three',
    ])
})

app.put('/projects/:id', (request, response)=>{

    const params = request.params;

    console.log(params)
    return response.json([
        'Project Four',
        'Project Two',
        'Project Three',
    ])
})
app.delete('/projects/:id', (request, response)=>{
    return response.json([
        'Project Two',
        'Project Three',
    ])
})

app.listen(3333, ()=>{
    console.log('Back-End started!👌️')
});