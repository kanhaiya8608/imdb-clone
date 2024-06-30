const Actor = require('../models/Actor');

exports.createActor = async (req, res) => {
  try {
    const actor = new Actor(req.body);
    await actor.save();
    res.status(201).json(actor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.status(200).json(actors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getActorById = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    res.status(200).json(actor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateActor = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    res.status(200).json(actor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteActor = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndDelete(req.params.id);
    if (!actor) {
      return res.status(404).json({ error: 'Actor not found' });
    }
    res.status(200).json({ message: 'Actor deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
