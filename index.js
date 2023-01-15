const express = require("express");
const app = express();
const { contacts, comments, vehicles, products } = require('./data')
const routes = require('./routes')

app.use(express.json());
app.use(express.static('public'));
app.use(routes);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


//Create express routes to get all things
// app.get('/contacts', (req, res) => {
//     res.json(contacts)
// });

// app.get('/comments', (req, res) => {
//     res.json(comments)
// });

// app.get('/vehicles', (req, res) => {
//     res.json(vehicles)
// });

// app.get('/products', (req, res) => {
//     res.json(products)
// });

//Create express routes to get one thing
// app.get('/contacts/:id', (req, res) => {
//     res.json(contacts.find(contact => contact._id === parseInt(req.params.id)))
// });

// app.get('/comments/:id', (req, res) => {
//     res.json(comments.find(comment => comment._id === parseInt(req.params.id)))
// });

// app.get('/vehicles/:id', (req, res) => {
//     res.json(vehicles.find(vehicle => vehicle._id === parseInt(req.params.id)))
// });


// app.get('/products/:id', (req, res) => {
//     res.json(products.find(product => product._id === parseInt(req.params.id)))
// });

//Create express routes to create one thing
// app.post('/contacts', (req, res) => {
//     const addInfo = {
//         ...req.body,
//         _id: contacts[contacts.length - 1]._id + 1
//     }

//     contacts.push(addInfo);
//     res.json(addInfo);
// });

// app.post('/comments', (req, res) => {
//     const addInfo = {
//         ...req.body,
//         _id: comments[comments.length - 1]._id + 1
//     }
    
//     comments.push(addInfo);
//     res.json(addInfo);
// })

// app.post('/vehicles', (req, res) => {
//     const addInfo = {
//         ...req.body,
//         _id: vehicles[vehicles.length - 1]._id + 1
//     }
    
//     vehicles.push(addInfo);
//     res.json(addInfo);
// })

// app.post('/products', (req, res) => {
//     const addInfo = {
//         ...req.body,
//         _id: products[products.length - 1]._id + 1
//     }
    
//     products.push(addInfo);
//     res.json(addInfo);
// })