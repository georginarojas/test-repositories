const express = require("express");
const router = express.Router();

const RepositoriesController = require('./controller/repositoriesController');

router.get('/repositories', RepositoriesController.index);
router.post('/send', RepositoriesController.send);



module.exports = router;

