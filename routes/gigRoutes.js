//routes to access crud
const  express = require('express');
const router = express.Router();
const gigRoutes = require('./routes');

router.use('/gigs', gigRoutes);

module.exports = router;

