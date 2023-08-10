INSERT INTO categories (category_name) VALUES
    ('Electronics'),
    ('Clothing'),
    ('Books'),
    ('Home and Garden');

-- Populate Products table
INSERT INTO products (product_name, price, stock, category_id) VALUES
    ('Smartphone', 599.99, 50, 1),
    ('Laptop', 899.99, 30, 1),
    ('T-Shirt', 19.99, 100, 2),
    ('Jeans', 49.99, 80, 2),
    ('Book', 9.99, 150, 3),
    ('Tools', 39.99, 50, 4);

-- Populate Tags table
INSERT INTO tags (tag_name) VALUES
    ('Sale'),
    ('New Arrival'),
    ('Bestseller'),
    ('Fashion'),
    ('Technology'),
    ('Outdoor');

-- Populate ProductTags table
INSERT INTO product_tags (product_id, tag_id) VALUES
    (1, 1),
    (1, 2),
    (1, 5),
    (2, 1),
    (2, 2),
    (2, 5),
    (3, 1),
    (3, 3),
    (3, 4),
    (4, 1),
    (4, 3),
    (5, 1),
    (5, 3),
    (6, 1),
    (6, 6);