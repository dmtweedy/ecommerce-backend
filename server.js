const express = require('express');
const cors = require('cors'); // Import the cors middleware
const routes = require('./routes/index');
const sequelize = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3001;

// Use the cors middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
});