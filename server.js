const express = require('express');

const app = express();
app.get('/ola', (req, res) => {
    res.send('OLA')
})
app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));


