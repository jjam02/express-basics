const express = require("express");
const router = express.Router();
const { data } = require("../data/cardData.json");
const { cards } = data;

router.get("/:id", (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { text, hint, side };
  res.render("card", templateData);
});

module.exports = router;
