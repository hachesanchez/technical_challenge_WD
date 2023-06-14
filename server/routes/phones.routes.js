const router = require("express").Router();

const {
  getAllPhones,
  getOnePhone
} = require('./../controllers/phones.controllers')

router.get('/', getAllPhones)
router.get('/:id', getOnePhone)


module.exports = router;
