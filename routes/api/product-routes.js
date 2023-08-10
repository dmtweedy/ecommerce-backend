const express = require('express');
const { Product, Category, Tag, ProductTag } = require('../../models/Product'); // Adjust the path as needed

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category, { model: Tag, through: ProductTag }]
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [Category, { model: Tag, through: ProductTag }]
    });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a product by id
router.put('/:id', async (req, res) => {
  try {
    const [updatedRows] = await Product.update(req.body, {
      where: { id: req.params.id }
    });
    if (updatedRows === 0) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a product by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id }
    });
    if (!deletedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;