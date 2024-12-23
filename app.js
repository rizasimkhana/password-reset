require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');

const authRoutes=require('./routes/routes');

const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(bodyParser.json());

app.use(authRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(3004, () => {
  console.log('Server running on port 3000');
});
