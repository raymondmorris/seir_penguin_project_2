//////////////////////////////
// Import Dependencies
/////////////////////////////
const mongoose = require("mongoose")
const Drink = require("./drink")


/////////////////////////////
// Seed
/////////////////////////////
const db = mongoose.connection

db.on("open", () => {
    const drinks = [
        {
            name: "Old Fashioned", 
            image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
            measurements: {
                measurement1: "2 oz",
                measurement2: "2 dashes",
                measurement3: "1 tsp",
                measurement4: "1",
                measurement5: "1 tsp",
                measurement6: "1",
                measurement7: null,
                measurement8: null,
                measurement9: null,
                measurement10: null,
                    },
            ingredients: {
                ingredient1: "Bourbon or Rye Whiskey",
                ingredient2: "Angostura Bitters",
                ingredient3: "Sugar",
                ingredient4: "Orange Twist Garnish",
                ingredient5: "Water",
                ingredient6: "Cocktail Cherry",
                ingredient7: null,
                ingredient8: null,
                ingredient9: null,
                ingredient10: null,
            },
            instructions: "Add the sugar and bitters to a rocks glass, then add the water, and stir until the sugar is nearly dissolved. Fill the glass with large ice cubes, add the bourbon, and gently stir to combine. Express the oil of an orange peel over the glass, then drop in, add the cherry and serve.",
            glass: "Old Fashioned Glass",
        },
        {
            name: "Moscow Mule", 
            image: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
            measurements: {
                measurement1: "2 oz",
                measurement2: "4-6 oz",
                measurement3: ".5oz",
                measurement4: "1",
                measurement5: null,
                measurement6: null,
                measurement7: null,
                measurement8: null,
                measurement9: null,
                measurement10: null,
            },
            ingredients: {
                ingredient1: "Vodka",
                ingredient2: "Ginger Beer",
                ingredient3: "Lime Juice",
                ingredient4: "Lime Wheel",
                ingredient5: null,
                ingredient6: null,
                ingredient7: null,
                ingredient8: null,
                ingredient9: null,
                ingredient10: null,
            },
            instructions: "Fill a Copper mug (or Highball Glass) with ice, then add Vodka and lime juice. Top with Ginger Beer, stir gently, garnish with lime wheel and serve",
            glass: "Copper Mug or Highball Glass",
        },{
            name: "Mojito", 
            image: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
            measurements: {
                measurement1: "2-4",
                measurement2: "2 oz",
                measurement3: ".75 oz",
                measurement4: ".5 oz",
                measurement5: "Top With",
                measurement6: "1",
                measurement7: "1",
                measurement8: null,
                measurement9: null,
                measurement10: null,
            },
            ingredients: {
                ingredient1: "Mint Leaves",
                ingredient2: "White Rum",
                ingredient3: "Lime Juice",
                ingredient4: "Simple Syrup",
                ingredient5: "Club Soda",
                ingredient6: "Mint Sprig",
                ingredient7: "Lime Wheel",
                ingredient8: null,
                ingredient9: null,
                ingredient10: null,
            },
            instructions: "Lightly muddle the mint with the simple syrup in a shaker. Add the rum, lime juice, and ice and give it a brief shake. Strain into a highball glass over fresh ice. Top with club soda, garnish with mint sprig and lime wheel, and serve.",
            glass: "Highball Glass",
        },
        {
            name: "Whiskey Sour", 
            image: "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
            measurements: {
                measurement1: "2 oz",
                measurement2: ".75 oz",
                measurement3: ".5 oz",
                measurement4: ".5 oz",
                measurement5: "1 dash",
                measurement6: null,
                measurement7: null,
                measurement8: null,
                measurement9: null,
                measurement10: null,
            },
            ingredients: {
                ingredient1: "Bourbon",
                ingredient2: "Lemon Juice",
                ingredient3: "Simple Syrup",
                ingredient4: "Egg White(Optional)",
                ingredient5: "Angostura Bitters",
                ingredient6: null,
                ingredient7: null,
                ingredient8: null,
                ingredient9: null,
                ingredient10: null,
            },
            instructions: "Add Bourbon, lemon juice, simple syrup, and egg white(Optional) to a shaker and dry-shake for 30 seconds without ice. Add ice and shake again until well chilled. Strain into a Coupe glass or Old Fashioned glass. Garnish with 3-4 drops of Angostura bitters and serve.",
            glass: "Coupe Glass or Old Fashioned Glass",
        },
        {
            name: "Gimlet", 
            image: "https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg",
            measurements: {
                measurement1: "2.5 oz",
                measurement2: ".5 oz",
                measurement3: ".5 oz",
                measurement4: "1",
                measurement5: null,
                measurement6: null,
                measurement7: null,
                measurement8: null,
                measurement9: null,
                measurement10: null,
            },
            ingredients: {
                ingredient1: "Gin or Vodka",
                ingredient2: "Lime Juice",
                ingredient3: "Simple Syrup",
                ingredient4: "Lime Wheel",
                ingredient5: null,
                ingredient6: null,
                ingredient7: null,
                ingredient8: null,
                ingredient9: null,
                ingredient10: null,
            },
            instructions: "Add the Gin or Vodka, lime juice, and simple syrup to a shaker with ice and shake until well chilled. Strain into a chiled Martini glass. Garnish with lime wheel and serve.",
            glass: "Martini Glass",
        },
        {
            name: "Mimosa", 
            image: "https://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg",
            measurements: {
                measurement1: "2 oz",
                measurement2: "Top with",
                measurement3: null,
                measurement4: null,
                measurement5: null,
                measurement6: null,
                measurement7: null,
                measurement8: null,
                measurement9: null,
                measurement10: null,
            },
            ingredients: {
                ingredient1: "Orange Juice",
                ingredient2: "Chilled Champagne",
                ingredient3: null,
                ingredient4: null,
                ingredient5: null,
                ingredient6: null,
                ingredient7: null,
                ingredient8: null,
                ingredient9: null,
                ingredient10: null,
            },
            instructions: "Pour the orange juice into Champagne flute, top with Champagne and serve.",
            glass: "Champagne Flute",
        },
    ]
    Drink.deleteMany({})
    .then((data) => {
        Drink.create(drinks)
        .then((data) => {
            console.log(data)
            db.close()
        })
    })
})