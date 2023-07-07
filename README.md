# Recipe Rolodex

Recipe Rolodex allows users to collect and manage their favorite recipes from around the web into a single, searchable collection via a user-friendly interface.

## Technologies Utilized

* React
* React-Router
* CSS Modules
* JSON Server
* Google Fonts

## Installation Instructions

Repcipe Rolodex is not currently live on the web, and the "server" is run via json-server and a local file called db.json . Recommended 'installation' instructions are:
* Fork and Clone this Repo
* Within the home directory of the project and with Node.js installed, run:
  - "npm install"
  - "npm run server"
  - "npm start"
* View the program in a browser at http://localhost:3000 . If you wish to view the server data, visit http://localhost:4000/recipes with the server running.

## Usage

The Navigation Bar at the top of the application provides routes to Home, My Recipes, and Add New Recipe. Clicking on these links will direct the user to an appropriate route, where the actions they can take are as follows:
* Home
  - View the Home page, with the Recipe Rolodex title and logo
* My Recipes
  - View all Recipes in the Rolodex as Cards
  - Use the Search Bar: Recipe Cards displayed will be filtered to include only recipes whose names partially match the search query
  - Click on a specific Recipe Card, which will route the user to a specific Recipe Details page
* Recipe Details (arrived at by clicking a card)
  - View more detailed information on the recipe including the recipe's name, image, URL of where the recipe lives on the web, and user notes
  - Delete the recipe from the Rolodex

![](https://github.com/IguanasEverywhere/recipe-rolodex/blob/main/gifs/demo1.gif =250x250)

* Add New Recipe
  - Add a new recipe to the Rolodex by completing a form. The form has basic validation to ensure a submit button only appears when all input fields are not empty.

![](https://github.com/IguanasEverywhere/recipe-rolodex/blob/main/gifs/demo2.gif =250x250)

## Roadmap for Future Plans

Ideas for future development for Recipe Rolodex include:
* Deploying the front end to a host to make the project "live"
* Replacing json-server with a true back end, so that data can persist in a way that is accessible from any eligible client
* Add ability to edit recipe details
* Add an "ingredients" array to recipe details
* Add more detailed form validation for Add New Recipe (i.e. require URLs to be valid syntax)
* Incorporate "fallback" placeholder images in case a recipe's image fails to load

## Author
Scott Schwab, 2023

## Acknowledgements
* Home Page Logo image by "Cooker King" via Unsplash, https://unsplash.com/photos/AOVtEuU9UGc
* Recipe images are all provided by their respective websites, as listed in each recipe's Details page
* "Ysabeau Office" font provided from Google Fonts, https://fonts.google.com
* README template ideas utilized from http://makeareadme.com and http://markdownlivepreview.com
* Demonstration GIF captured with GIPHY CAPTURE, https://giphy.com/apps/giphycapture
