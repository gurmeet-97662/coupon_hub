import {React, useState, useEffect} from 'react'
import { Box, Stack } from "@chakra-ui/react"
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from './Card'
import axios from "axios";
import {
    useLocation,
  } from "react-router-dom";
const host= "http://localhost:8000"


const Home = (props) => {
    let location = useLocation();

    const [coupon, setCoupon] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getCouponById() {
				try {
					const response = await axios.get(`${host}/api/coupons/${_id}`);
					setCoupon(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCouponById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);
    

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get(`${host}/api/getkey`)

        const { data: { order } } = await axios.post(`${host}/api/checkout`, {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Gurmeet jangra",
            description: "UseCoupons Payment Gateway",
            image: "https://avatars.githubusercontent.com/u/66241804?v=4",
            order_id: order.id,
            //callback_url: `${host}/api/paymentverification`,
            handler: async function (response) {
               


                const result = await axios.post(`${host}/api/paymentverification`, response);


                // alert(result.data.msg);
                

            
            },
            
           // callback_url: `${host}/api/paymentverification`,
            prefill: {
                name: "Gurmeet Jangra",
                email: "gurmeetjangrakulana@gmail.com",
                contact: "7496897662"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    
   

    return (
        
                      
    <Card amount={coupon.price} checkoutHandler={checkoutHandler}/>
                        
                   
    
    )
}

export default Home
