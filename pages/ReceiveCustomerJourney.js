import React from 'react'
import Image from 'next/image'
import ReceiveCustomer from '../components/fulljourney/ReceiveCustomer'
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100%;
   
`

const ReceiveCustomerJourney = () => {
    return (
        <Container>
            <ReceiveCustomer />
        </Container>
    )
}

export default ReceiveCustomerJourney
