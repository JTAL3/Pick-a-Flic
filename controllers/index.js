const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
); 

module.exports = router;
