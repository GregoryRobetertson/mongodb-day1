'use client';

// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT =  process.env.PORT || 3002;
// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://gregoryrobertsondev:kkjAfvAP4GpXeQge@cluster0.tbptqgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log('Server is running on ' + PORT);
});
