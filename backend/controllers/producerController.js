const Producer = require('../models/Producer');

exports.createProducer = async (req, res) => {
  try {
    const producer = new Producer(req.body);
    await producer.save();
    res.status(201).json(producer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProducers = async (req, res) => {
  try {
    const producers = await Producer.find();
    res.status(200).json(producers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProducerById = async (req, res) => {
  try {
    const producer = await Producer.findById(req.params.id);
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    res.status(200).json(producer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducer = async (req, res) => {
  try {
    const producer = await Producer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    res.status(200).json(producer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProducer = async (req, res) => {
  try {
    const producer = await Producer.findByIdAndDelete(req.params.id);
    if (!producer) {
      return res.status(404).json({ error: 'Producer not found' });
    }
    res.status(200).json({ message: 'Producer deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
