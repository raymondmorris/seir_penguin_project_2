////////////////////////////
// Import Dependencies
////////////////////////////
const express = require("express")
const Drink = require("../models/drink.js")

const router = express.Router()

//////////////////////////////
// Routes
//////////////////////////////
// index Route
router.get("/", (req, res) => {
    Drink.find({})
    .then((drinks) => {
        res.render("drinks/index.liquid", {drinks})
    })
    .catch((error) => {
        res.json({error})
    })
})

// New Route
router.get("/new", (req, res) => {
    res.render("drinks/new.liquid");
  });

// Create route
router.post("/", (req, res) => {
  Drink.create(req.body)
    .then((drinks) => {
      res.redirect("/drinks");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// Edit Route
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;

  Drink.findById(id)
    .then((drink) => {
      res.render("drinks/edit.liquid", {drink});
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// Update Route
router.put("/:id", (req, res) => {
  const id = req.params.id;

  Drink.findByIdAndUpdate(id, req.body, { new: true })
    .then((drink) => {
      res.redirect("/drinks");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//Delete Route
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Drink.findByIdAndRemove(id)
    .then((drink) => {
      res.redirect("/drinks");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// show route - get - /fruits/:id
router.get("/:id", (req, res) => {
    const id = req.params.id;
  
    Drink.findById(id)
      .then((drink) => {
        res.render("drinks/show.liquid", {drink});
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });



//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router