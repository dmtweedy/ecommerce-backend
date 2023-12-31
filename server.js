const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
});