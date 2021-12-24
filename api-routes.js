// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import controller
var controller = require('./controller');
// controller routes


router.route('/pantry')
    .get(controller.index)
    .post(controller.new); 

router.route('/pantry/:pantry_id/basket/:basket_name')
    .get(controller.view)
    .put(controller.updateBasket)
    .delete(controller.deleteBasket).post(controller.createBasket);

router.route('/pantry/:pantry_id')
    .get(controller.viewPantry)
    .delete(controller.deletePantry);


// Export API routes
module.exports = router;