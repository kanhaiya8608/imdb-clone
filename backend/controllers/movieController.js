const Movie = require('../models/Movie');

exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate('producer actors');
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('producer actors');
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
