var recipes = require("../recipes.json");
var router = require("express").Router();

//page default value
const pageValue = 1;
//limit default value
const limitValue = 3;

//getRecipies - pagination method
//check query params
//if not null, set page and limit values
//parse data from json
//return paginated values according to page and limit value

/* router.get("/", (){

})); */


module.exports = router;