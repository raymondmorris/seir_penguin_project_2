////////////////////////////////
// Import Dependencies
////////////////////////////////
const express = require("express")


const app = express()

app.get("/", (req, res) => {
    res.send("This app is working")
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})