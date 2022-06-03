const express = require('express');

const app = express();

const data = require('./data.json')

app.get('/users', function(request, response){
    console.log(request.query)

    const count = parseInt(request.query.count);
    const offset = parseInt( request.query.offset)-1;

    response.json({data: data.slice(offset, offset + count), count: data.length})

})

const PORT = 1212;
app.listen(PORT, ()=>{
    console.log(`server ${PORT}-portunda isleyir`)
})