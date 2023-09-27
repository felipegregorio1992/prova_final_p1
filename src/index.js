require('dotenv').config();
const express = require('express'); 

const Loaders = require('./mongo/index.js'); 

const routesLive = require('./mongo/routes.js'); 

const routes = require('./routes'); 

const app = express();


Loaders.start(); 
app.use(express.json());

app.use(routes);

app.use(routesLive); 



app.set('view engine', 'html');



app.get('/', (req, res, next) => {
    res.redirect("/login");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`); 
});
