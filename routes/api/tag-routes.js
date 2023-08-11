const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/tags', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/tags/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json(tag);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/tags/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/tags/:id', async (req, res) => {
  try {
    await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    const tag = await Tag.findByPk(req.params.id);
    res.status(200).json(tag);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/tags/:id', async (req, res) => {
  try {
    await Tag.destroy({
      where: { id: req.params.id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;