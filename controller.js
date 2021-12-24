// Controller.js
// Import Pantry model
Pantry = require("./pantryModel");

// Handle index actions or default views
exports.index = function (req, res) {
  Pantry.get(function (err, pantrys) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Pantryes retrieved successfully",
      data: pantrys,
    });
  });
};
// Handle create pantry operations

exports.new = function (req, res) {
  var pantry = new Pantry();
  pantry.name = req.body.name ? req.body.name : pantry.name;
  pantry.email = req.body.email;
  // save the pantry and check for errors
  pantry.save(function (err) {
    // Check for validation error
    if (err) res.json(err);
    else
      res.json({
        message:
          "New pantry created!, Please save Pantry Id to use it in future!",
        pantry_id: pantry._id,
        data: pantry,
      });
  });
};
// Handle view contact info
exports.view = function (req, res) {
  Pantry.findById(req.params.pantry_id, function (err, pantry) {
    if (err) res.send(err);
    if (
      pantry &&
      pantry.baskets !== undefined &&
      req.params.basket_name in pantry.baskets
    ) {
      res.json({
        message: "Basket exists!",
        data: pantry.baskets[req.params.basket_name],
      });
    } else {
      res.json({
        message: "Basket Not found, Available Baskets: Below",
        data: pantry.baskets,
      });
    }
  });
};

//handle get all baskets
exports.viewPantry = function (req, res) {
  Pantry.findById(req.params.pantry_id, function (err, pantry) {
    if (err) res.send(err);

    res.json({
      message: "Pantry found, Available Baskets: Below",
      data: pantry,
    });
  });
};

// Handle create basket
exports.createBasket = function (req, res) {
  Pantry.findById(req.params.pantry_id, function (err, pantry) {
    if (err) res.send(err);

    if (
      pantry &&
      pantry.baskets !== undefined &&
      req.params.basket_name in pantry.baskets
    ) {
      res.json({
        message: "Basket already exists!",
        data: pantry.baskets[req.params.basket_name],
      });
    } else {
      var basket = {
        name: req.params.basket_name,
        data: req.body,
      };
      pantry.baskets = { ...pantry.baskets, [req.params.basket_name]: basket };
      pantry.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Basket created!",
          data: pantry,
        });
      });
    }
  });
};
// Handle update pantry info
exports.updateBasket = function (req, res) {
  Pantry.findById(req.params.pantry_id, function (err, pantry) {
    if (err) res.send(err);
    if (req.params.basket_name in pantry.baskets) {
      pantry.baskets[req.params.basket_name].data = req.body;
      pantry.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Basket updated!",
          data: pantry.baskets[req.params.basket_name],
        });
      });
    }

    // save the contact and check for errors
    else {
      res.json({
        message: "Basket Not found",
        data: pantry.baskets,
      });
    }
  });
};
// Handle delete contact
exports.deletePantry = function (req, res) {
  Pantry.remove(
    {
      _id: req.params.pantry_id,
    },
    function (err, pantry) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Pantry deleted",
        pantry_id: req.params.pantry_id,
      });
    }
  );
};
// Handle delete basket
exports.deleteBasket = function (req, res) {
  Pantry.findById(req.params.pantry_id, function (err, pantry) {
    if (err) res.send(err);
    if (req.params.basket_name in pantry.baskets) {
      delete pantry["baskets"][req.params.basket_name];
      pantry.markModified("baskets");
      pantry.save(function (err) {
        if (err) res.json(err);
        res.json({
          message: "Basket Deleted!",
          status: "Success",
          data: pantry.baskets,
        });
      });
    }

    // save the contact and check for errors
    else {
      res.json({
        message: "Basket Not found",
        data: pantry.baskets,
      });
    }
  });
};