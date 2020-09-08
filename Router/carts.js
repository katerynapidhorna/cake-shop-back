const { Router } = require("express");
const product = require("../models/product");

const router = new Router();
const Carts = require("../models").cart;

// router.post("/cart/:id", async (req, res) => {
//     try {
//       const id = req.params.id
//       const cart = await Carts.findByPk(id);
//       if (!cart) {
//         res.status(404).send("cart not found");
//       } else {
//         const newItem = await Carts.update
//         console.log('cake', cupcake)
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   });
router.get("/cart/:id", async (req, res) => {
  try {
    const id = req.params.id
    const cart = await Carts.findByPk(id);
    if (!cart) {
      res.status(404).send("cart not found");
    } else {
      res.send(cart);
      console.log('cake', cupcake)
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router
