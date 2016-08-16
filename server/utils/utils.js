const request = require('request');
require('dotenv').config();
const _ = require('lodash');
import {setNewUser} from '../db/controllers/userSet';

const foodFactsSearchHandler = function(req, res) {
  const searchString = req.body.searchTerm.replace(' ', '&'); 
  console.log(searchString);

  request.post(
    'https://api.foodfacts.com/ci/api/foodfacts/food_products_per_search_term/format/json',
    {
      form: {
        login: process.env.FOOD_FACTS_LOGIN,
        password: process.env.FOOD_FACTS_PASSWORD,
        search_term: searchString,
        per_page: 10,
        page: 1,
        sort_by: '_score:desc'
      }
    },
    function (error, response, body) {
      if (!error) {
        var result = JSON.parse(body);
        console.log(result.results.products);
        res.send(result.results.products);
      } else {
        console.log('Food Facts API error', error);
      }
    }
  );
};

const foodFactsUPCHandler = (req, res) => {
  console.log('inside foodfacts api');
  const upc = req.body.event.data.slice(1);
  console.log(upc);
  request.post(
    'https://api.foodfacts.com/ci/api/foodfacts/food_find_product_by_upc/format/json',
    {
      form: {
        login: process.env.FOOD_FACTS_LOGIN,
        password: process.env.FOOD_FACTS_PASSWORD,
        upc: upc
        // upc: '07502125' // test invalid UPC
        // upc: '014100085461' // test valid UPC
      }
    },
    function (error, response, body) {
      if (!error) {
        var parsedBody = JSON.parse(body);

        if (parsedBody.code === 1010 || parsedBody.message === 'Invalid food UPC provided') {
          res.send({ validUPC: false });
        } else {
          var result = parseFoodFactsData(parsedBody.results);
          res.send(result);          
        }

      } else {
        console.log('Food Facts API error', error);
      }
    }
  );
};

const parseFoodFactsData = (data) => {
  console.log(data);
  const allergies = {};
  const diet = {};
  const ingredientList = [];

  _.forEach(data.product_allergens, function(allergen) {
    var name = allergen.name;
    allergies[name] = [];
    diet[name] = true;
  });

  _.forEach(data.product_ingredients, function(ingredient) {
    if (ingredient.name !== ',') {
      if (ingredient.allergens !== null) {
        var allergens = ingredient.allergens;
        allergens = allergens.replace(/\d+:/g, '').split('|');
        ingredientList.push(ingredient.name);

        _.forEach(allergens, function(allergen) {
          if (allergies[allergen]) {
            allergies[allergen].push(ingredient.name);
          }
        });

      }
    }
  });

  const foodFactsData = {
    allergies: allergies,
    diet: diet,
    imgURL: data.product_detail.product_image,
    ingredientList: ingredientList,
    reportCard: data.report_card,
    score: data.product_detail.food_facts_score,
    validUPC: true
  };
  console.log(foodFactsData);
  return foodFactsData;

};

const facebookHandler = (req, res) => {
  setNewUser(req.body, res);
};

exports.facebookHandler = facebookHandler;
exports.foodFactsSearchHandler = foodFactsSearchHandler;
exports.foodFactsUPCHandler = foodFactsUPCHandler;

