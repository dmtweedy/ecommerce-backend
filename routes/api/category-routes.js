const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/api/categories', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/api/categories/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/api/categories', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/api/categories/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/api/categories/:id', async (req, res) => {
  try {
    await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;