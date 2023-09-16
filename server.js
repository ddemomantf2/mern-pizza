const express = require("express");
const pizza = require("C:\Users\user\Desktop\mern-pizza\server.js")
const db = require("./db")

const app = express();
const db = require("./db.js")
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/pizzas/' , pizzasRoute)
app.use('/api/user/users/' , userRoute)
const port = process.env.PORT || 5000;
app.listen(port, () => 'server running on port!!!')