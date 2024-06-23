const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const {connectDb} = require("./src/config/db")

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

connectDb();

// app.use('/api/items', require('./routes/itemRoutes'));
    
app.listen(port, () => console.log(`Server running on port ${port}`));
