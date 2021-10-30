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
const session = require("express-session")
const MongoStore = require("connect-mongo")
const UserRouter = require("./controllers/user.js")
const Drink = require("./models/drink.js")

const app = liquid(express(), {root: viewsFolder})

/////////////////////////////////
// Middleware
/////////////////////////////////
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    resave: false,
    saveUninitialized: true,
}))


///////////////////////////////
// Routes
///////////////////////////////
app.get("/", (req, res) => {
    Drink.find({})
    .then((drinks) => {
        res.render("index.liquid", {drinks})
    })
    .catch((error) => {
        res.json({error})
    })
})

app.use("/drinks", DrinksRouter)
app.use("/user", UserRouter)



///////////////////////////
// Server Listener
///////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})