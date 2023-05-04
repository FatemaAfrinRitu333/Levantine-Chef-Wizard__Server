const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('The Levantine Chef Wizard is running')
});



app.listen(port, () => {
    console.log(`Levantine Chef Wizard is running on port: ${port}`)
});