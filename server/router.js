const router = require('express').Router();
const controllers = require('./controllers.js');


router
  .route('/product/:id')
  .get(controllers.get)
  .delete(controllers.remove)
  .put(controllers.put);

router
  .route('/product')
  .post(controllers.post)  

router
  .route('/product:name?')  
  .get(controllers.getByName)

router.route('*.js.gz')
  .get((req, res, next) => {
    res.set('Content-Encoding', 'gzip');
    next();
  });  


module.exports = router;
