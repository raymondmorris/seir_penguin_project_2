//////////////////////////////
// Import Dependencies
//////////////////////////////
const express = require("express")
const User = require("../models/user.js")
const bcrypt = require("bcryptjs")
const Drink = require("../models/drink.js")

/////////////////////
// Router
//////////////////////
const router = express.Router()

////////////////////
// Routes
/////////////////

// Sign up
router.get("/signup", (req, res) => {
    res.render("user/signup.liquid")
})

router.post("/signup", async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    User.create(req.body)
    .then((user) => {
        console.log(user)
        res.redirect("/user/login")
    })
    .catch((error) => {
        console.log(error)
        res.json({error})
    })
})

// Login 
router.get("/login", (req, res) => {
    res.render("user/login.liquid")
})

router.post("/login", async (req, res) => {
    const {username, password} = req.body

    User.findOne({username})
    .then(async (user) => {
        if(user){
            const result = await bcrypt.compare(password, user.password)
            if(result) {
                req.session.username = username
                req.session.loggedIn = true
                res.redirect("/drinks")
            } else {
                res.json({Error: "Password does not match"})
            }
        } else {
            res.json({error: "User does not exist"})
        }
    })
    .catch((error) => {
        console.log(error)
        res.json({error})
    })
})

//Logout
router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/")
    })
})



/////////////////
// Export Router
/////////////////
module.exports = router