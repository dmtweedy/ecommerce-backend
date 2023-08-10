const express = require('express');
const { Product, Category, Tag, ProductTag } = require('../../models/Product'); // Adjust the path as needed

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {

});

// Get a single product by id
router.get('/:id', async (req, res) => {

});

// Create a new product
router.post('/', async (req, res) => {

});

// Update a product by id
router.put('/:id', async (req, res) => {

});

// Delete a product by id
router.delete('/:id', async (req, res) => {

});

module.exports = router;