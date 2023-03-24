const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();

app.use(cors())
app.use(express.json());

const router = require('./router');
app.use(router);

const db = require("./db/db.js");
const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
// console.log(`Server running in port ${PORT}`);
    
// db.authenticate()
// .then(() => {
//     console.log("Connected to database");
// })
// .catch((error) => {
//     console.log("Error: " + error);
// });

db.then(() => {
    app.listen(PORT, () => console.log(`Application is listening at port ${PORT}`))
    })
    .catch((err) => console.log(err.message))
