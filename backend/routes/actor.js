const express = require('express');
const router = express.Router();
const { createActor, getActors,getActorById, deleteActor  } = require('../controllers/actorController');

router.post('/', createActor);
router.get('/', getActors);

module.exports = router;
