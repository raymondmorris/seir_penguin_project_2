# Project 2
#### By NAME

## Project Summary

This app will provide a list of drinks. When clicked on the page will show the drink chose. This display will include properties layed out in the models section of this markdown. 

## Models

#### Model: drinks
- name: String  
- image: String 
- measurements: [{measurement1: String, measurement2: String, measurement3: String, measurement4: String, measurement5: String, measurement6: String, measurement7: String, measurement8: String, measurement9: String, measurement10: String,}] 
- ingredients: [{ingredient1: String, ingredient2: String, ingedient3: String, ingredient4: String, ingredient5: String, ingredient6: String, ingredient7: String, ingredient8: String, ingredient9: String, ingredient10: String,}] 
- instructions: String 
- glass: String 


## Route Table

| url | method | action |
|-----|--------|--------|
| /drinks | get | get all drinks (index) |
| /drinks/:id | get | get a selected drink (show) |
| /drinks/new | get | render for to create new drink (new) |
| /drinks | post | create new drink (create) |
| /drinks/:id/edit | get | render form to edit drink (edit) |
| /drinks/:id | put | update drink (update) |
| /drinks/:id | delete | delete drink (delete ) |
## User Stories

## Challenges

- detail roadblocks and anything you did to overcome whether you did or didn't

## List of Technologies

* html
* css
* express
* liquidjs
* mongoose
* MongoDB