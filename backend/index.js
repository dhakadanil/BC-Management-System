const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.js');
const bcRoutes = require('./routes/bcRoutes.js');




dotenv.config();

const app = express();

connectDB();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json()); 
app.use(cookieParser());

app.use('/api/bc', bcRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running in beautiful clean architecture on port ${PORT}`);
});
