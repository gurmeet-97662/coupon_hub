const express = require("express");
const router = express.Router();
const couponController = require("../controllers/couponController");

router.get("/", couponController.coupon_index);
router.post("/", couponController.coupon_create_post);
router.get("/:id", couponController.coupon_details);
router.patch("/:id", couponController.coupon_update);
router.delete("/:id", couponController.coupon_delete);

module.exports = router;
