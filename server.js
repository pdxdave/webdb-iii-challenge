// bring in express
const express = require('express');

// create server
const server = express();

//bring in extra tools
const helmet = require('helmet');
const cors = require('cors');

//middleware
server.use(helmet());
server.use(express.json());
server.use(logger);
server.use(cors());

// router
// const someRouter = require('./somerouter/some')

// server.use('/some/some', someRouter)

server.get('/' , (req, res) => {
    res.send('This is a test')
})

function logger(req, res, next){
    console.log(`${req.method} Request`)
    next();
}

module.exports = server;