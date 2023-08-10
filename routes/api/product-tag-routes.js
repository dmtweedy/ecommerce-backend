const express = require('express');
const { ProductTag } = require('../../models/ProductTag'); // Adjust the path as needed

const router = express.Router();

// Create a new product tag
router.post('/', async (req, res) => {
  try {
    const productTag = await ProductTag.create(req.body);
    res.status(201).json(productTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a product tag by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedProductTag = await ProductTag.destroy({
      where: { id: req.params.id }
    });
    if (!deletedProductTag) {
      res.status(404).json({ message: 'Product tag not found' });
      return;
    }
    res.status(200).json({ message: 'Product tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;