import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {
    

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Payment Successfull</Heading>

                <Text>
                    Reference No.{referenceNum}
                </Text>
       
              
            </VStack>
        </Box>
        
    )
    
}

export default PaymentSuccess