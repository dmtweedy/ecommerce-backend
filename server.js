const express = require('express');
const routes = require('./routes'); // Import the main router
const sequelize = require('./config/connection'); // Import your Sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up CORS to allow requests from different origins
app.use(cors());

// Mount the main router under the /api endpoint
app.use('/api', routes);

// Sync Sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}!`);
  });
});