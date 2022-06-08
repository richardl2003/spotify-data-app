const express = require('express');

const app = express();

// app.METHOD(PATH, HANDLER);

app.get('/', (req, res) => {
    const data = {
        name: "Richard",
        is_awesome: true
    };

    res.json(data)
});

app.get('/awesome-generator', (req, res) => {
    const {name, isAwesome} = req.query
    res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`);
})

const port = 8888;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});