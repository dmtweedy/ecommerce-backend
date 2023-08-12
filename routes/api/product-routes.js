const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (req.body.tagIds && req.body.tagIds.length) {
      await product.addTags(req.body.tagIds);
    }
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id },
    });
    const product = await Product.findByPk(req.params.id);
    if (req.body.tagIds && req.body.tagIds.length) {
      await product.setTags(req.body.tagIds);
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;