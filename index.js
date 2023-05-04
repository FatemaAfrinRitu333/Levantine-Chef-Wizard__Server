const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const chefCard = require('./data/chefCard.json');
const chefDetail = require('./data/chefDetails.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('The Levantine Chef Wizard is running')
});

app.get('/chefCard', (req, res) => {
    res.send(chefCard)
});

app.get('/chefDetail', (req, res) => {
    res.send(chefDetail)
});

// id wise data load
app.get('/chefDetail/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id)
    const selectedChefDetail = chefDetail.find(detail=> parseInt(detail.chefId) === id);
    console.log(selectedChefDetail);
    res.send(selectedChefDetail);
})

app.listen(port, () => {
    console.log(`Levantine Chef Wizard is running on port: ${port}`)
});