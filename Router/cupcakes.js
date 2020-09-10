const { Router } = require("express");

const router = new Router();
const Products = require("../models").product;

router.get("/cupcakes", async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    const cupcakes = await Products.findAll({
      limit,
      offset,
    });
    if (!cupcakes) {
      res.status(404).send("cupcake not found");
    } else {
      res.send(cupcakes);
      console.log('cakes', cupcakes)
    }
  } catch (e) {
    console.log(e);
  }
});
router.get("/cupcakes/:id", async (req, res) => {
  try {
    const id = req.params.id
    const cupcake = await Products.findByPk(id);
    if (!cupcake) {
      res.status(404).send("cupcake not found");
    } else {
      res.send(cupcake);
      console.log('cake', cupcake)
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router
