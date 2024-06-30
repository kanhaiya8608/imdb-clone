const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const actorRoutes = require('./routes/actor');
const movieRoutes = require('./routes/movie');
const producerRoutes = require('./routes/producer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

app.use('/actors', actorRoutes);
app.use('/movies', movieRoutes);
app.use('/producers', producerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
