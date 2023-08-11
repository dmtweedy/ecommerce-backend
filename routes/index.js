const router = require('express').Router();
const productRoutes = require('./api/product-routes'); // Adjust the filename
const categoryRoutes = require('./api/category-routes'); // Adjust the filename
const tagRoutes = require('./api/tag-routes'); // Adjust the filename


router.use('/api/products', productRoutes);
router.use('/api/categories', categoryRoutes);
router.use('/api/tags', tagRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;