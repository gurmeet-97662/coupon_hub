const Coupon = require("../models/couponModel");

// Display All Coupons

const coupon_index = (req, res)=>{
    Coupon.find(function (err, coupons) {
        res.json(coupons)
    })
};

// create A new Coupon
const coupon_create_post = (req, res) => {
   let coupon = new Coupon(req.body);
   coupon.save().then((coupon) =>{
    res.send(coupon)
   })
   .catch(function (err){
    res.status(422).send("coupon add failed")
   });
}
// show a particular coupon details by ID
const coupon_details = (req, res) =>{
    Coupon.findById(req.params.id, function(err, coupon){
        if(!coupon){
            res.status(404).send("No Result Found")
        } else{
            res.json(coupon)
        }
    });
};

// update Coupon by Id
const coupon_update = (req, res) => {
	Coupon.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json("coupon updated");
		})
		.catch(function (err) {
			res.status(422).send("coupon update failed.");
		});
};

// Delete Coupon details by Id
const coupon_delete = (req, res) =>{
Coupon.findById(req.params.id, function(err, coupon){
    if(!coupon){
        res.status(404).send("coupon not found");
    }
    else{
        Coupon.findByIdAndRemove(req.params.id)
        .then(function (){
            res.status(200).json("Coupon deleted")
        })
        .catch(function (err){
            res.status(400).send("coupon delete failed")
        })
    }
})
};

module.exports = {
    coupon_index,
    coupon_details,
    coupon_create_post,
    coupon_update,
    coupon_delete
}