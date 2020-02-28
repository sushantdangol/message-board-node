const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

//import routers
const UserRouter = require('./users/routes/users');
const PostRouter = require('./posts/routes/posts');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

//Connect API Endpoints
app.use('/api/user', UserRouter);
app.use('/api/posts', PostRouter);

const uri = config.get('mongoURI');

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Database connected to: ${uri}`)
});

db.on('error', err => {
    console.log(err)
});

app.listen(port, () => {
    console.log(`Listening in port: ${port}`)
})
