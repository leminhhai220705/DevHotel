const express = require("express");

const app = express();

const dbConfig = require('./db');

const roomsRoute = require('./routes/roomsRoute');

const usersRoute = require('./routes/userRoute')

app.use(express.json())

app.use('/api/rooms', roomsRoute)
app.use('/api/users' , usersRoute)

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Node Server Started using nodemon`));