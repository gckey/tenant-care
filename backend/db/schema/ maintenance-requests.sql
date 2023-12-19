-- Create maintenance_requests table
CREATE TABLE maintenance_requests (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    request_date DATE NOT NULL DEFAULT CURRENT_DATE,
    description TEXT,
    priority TEXT DEFAULT 'low',
    category VARCHAR(80) NOT NULL,
    image_url VARCHAR(255),
    permission TEXT DEFAULT 'yes',
    status TEXT DEFAULT 'open',
    feedback VARCHAR(255)
);