const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// const categories = require('./data/categories.json');
// const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('The Levantine Chef Wizard is running')
});

// app.get('/categories', (req, res) => {
//     res.send(categories)
// });


// All data load
// app.get('/news', (req, res) => {
//     res.send(news)
// });


// id wise data load
// app.get('/news/:id', (req, res) => {
//     const id = req.params.id;
//     // console.log(id);
//     const selectedNews = news.find(n => n._id === id);
//     res.send(selectedNews);
// });

// // Category wise data load
// app.get('/categories/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     if (id == 0) {
//         res.send(news)
//     }
//     else {
//         const selectedCategory = news.filter(nc => parseInt(nc.category_id) === id);
//         res.send(selectedCategory);
//     }
// })

app.listen(port, () => {
    console.log(`Levantine Chef Wizard is running on port: ${port}`)
});