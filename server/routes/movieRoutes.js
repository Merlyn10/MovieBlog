const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

/**
 * App Routes 
*/
router.get('/', movieController.homepage);
router.get('/movie/:id', movieController.exploreMovie);
router.get('/categories', movieController.exploreCategories);
router.get('/categories/:id', movieController.exploreCategoriesById);
router.post('/search', movieController.searchMovie);
router.get('/explore-latest', movieController.exploreLatest);
router.get('/explore-random', movieController.exploreRandom);
router.get('/submit-movie', movieController.submitMovie);
router.post('/submit-movie', movieController.submitMovieOnPost);

 
module.exports = router;