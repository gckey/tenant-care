--Insert seed data into maintenance_requests table
INSERT INTO maintenance_requests (user_id, description, priority, category, image_url, permission, status) VALUES
(1, 'Leaky faucet in kitchen', 'high', 'Plumbing', 'http://example.com/images/leaky-faucet.jpg', 'yes', 'open'),
(1, 'Broken light fixture in living room', 'medium', 'Electrical', 'http://example.com/images/broken-light.jpg', 'no', 'open');