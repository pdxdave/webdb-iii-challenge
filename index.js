// connect to the server
const server = require('./server')

server.listen(5005, () => {
    console.log('Server running on port 5005')
})