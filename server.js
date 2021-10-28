////////////////////////////////
// Import Dependencies
////////////////////////////////
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const path = require("path")
const DrinksRouter = require("./controllers/drink.js")
const liquid = require("liquid-express-views")
const viewsFolder = path.resolve(__dirname, "views/")

const app = liquid(express(), {root: viewsFolder})

/////////////////////////////////
// Middleware
/////////////////////////////////
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


///////////////////////////////
// Routes
///////////////////////////////
app.get("/", (req, res) => {
    res.send("This app is working")
})

app.use("/drinks", DrinksRouter)



///////////////////////////
// Server Listener
///////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})