const server = require("./index.js")
require("dotenv").config()
const {PORT} = process.env

server.listen(PORT, () => {
    console.log("Listening to Port " + PORT)
})