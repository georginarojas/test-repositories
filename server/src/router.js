const express = require("express");
const router = express.Router();

const RepositoriesController = require('./controller/repositoriesController');

router.get('/repositories', RepositoriesController.index);


router.get("/",function(request,response){
response.send("Hello World! from router")
})


module.exports = router;

