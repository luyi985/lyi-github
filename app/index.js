const express = require('express');
const { port } = require('config');
const githubController = require('./github')
const app = express();

app.get('/test', (req, res) => {
    res.json({ msg: 'service runnung' });
});

app.get('/github', githubController);
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});
