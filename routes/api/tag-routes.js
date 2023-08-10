const express = require('express');
const { Tag, Product, ProductTag } = require('../../models/Tag'); // Adjust the path as needed

const router = express.Router();

// Get all tags
router.get('/', async (req, res) => {

});

// Get a single tag by id
router.get('/:id', async (req, res) => {

});

// Create a new tag
router.post('/', async (req, res) => {

});

// Update a tag by id
router.put('/:id', async (req, res) => {

});

// Delete a tag by id
router.delete('/:id', async (req, res) => {

});

module.exports = router;