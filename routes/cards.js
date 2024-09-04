const express = require("express");
const router = express.Router();
const { data } = require("../data/cardData.json");
const { cards } = data;

router.get("/:id", (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];
  const max = cards.length - 1;
  const templateData = { text, hint, side, id, max };
  res.render("card", templateData);
});

router.get("/", (req, res) => {
  const max = cards.length - 1;
  const cardNum = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  res.redirect(`/cards/${cardNum}?side=question`);
});

module.exports = router;
