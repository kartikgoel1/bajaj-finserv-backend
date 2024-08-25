// Require Dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const dotevn = require('dotenv');
const bfhlRoutes = require('./routes/router');
// Load .env Enviroment Variables to process.env
dotevn.config();
const PORT = process.env.PORT || 3000;


// Instantiate an Express Application
const app = express();

// Configure Express App Instance
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());

app.use('/bfhl', bfhlRoutes);
app.listen(
    PORT,
    () => console.info(`Server listening on port -> ${PORT}`)
);