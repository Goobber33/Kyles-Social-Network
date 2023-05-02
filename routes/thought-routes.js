const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../controllers/thought-controller');

// Routes for /api/thoughts

router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// Routes for /api/thoughts/:thoughtId

router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Routes for /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions')
  .post(addReaction);

// Routes for /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
