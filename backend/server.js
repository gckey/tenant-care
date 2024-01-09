// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const db = require('./db/connection');
const PORT = process.env.PORT || 8080;
const app = express();
const cors =require ('cors');
const maintenanceRoutes = require('./routes/users/maintenance_requests-api');
const loginRoutes = require('./routes/users/Login-api');
const Signup= require('./routes/users/SignUp_api');
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(cors({
  origin: 'http://localhost:5173' // Replace with your frontend's origin
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(
  cookieSession({
    name: 'session',
    keys: ['myRandomSuperSecretKey', 'anotherRandomString'],

    // Cookie Options
    // maxAge: 24 * 60 * 60 * 1000 // 24 hours
    maxAge: 10 * 60 * 1000, // 10 min
  })
);
app.use(express.json());
// Use the router module for specific paths
app.use('/api/maintenance-requests', maintenanceRoutes);
// Login API endpoint
app.use('/api/login', loginRoutes);
app.use('/api/Signup', Signup);



// Catch all route
app.use((req, res) => {
  res.status(404).send({ message: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
