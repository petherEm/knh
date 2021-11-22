import React from 'react'
import styled from 'styled-components'
import MobileEntry from '../MobileEntry'
import MobileEntry2 from './MobileEntry2'
import MobileEntry3 from './MobileEntry3'
import MobileEntry4 from './MobileEntry4'
import MobileEntry5 from './MobileEntry5'
import MobileEntry6 from './MobileEntry6'
import MobileEntry7 from './MobileEntry7'
import MobileEntry8 from './MobileEntry8'
import MobileEntry9 from './MobileEntry9'
import PaymentVerification from './PaymentVerification'
import CheckRates from './CheckRates'
import MTCNLookUp from './MTCNLookUp'
import BankingDetails from './BankingDetails'
import MobileEntry9receive from './MobileEntry9receive'


const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: rgb(249, 222, 75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ScreenWrapper = styled.div`
    background-color: white;
    margin-top: 40px;
    width: 470px;
    height: 690px;
    display: flex;
    flex-direction: column;
 

    -webkit-box-shadow: 8px 9px 24px -4px rgba(66, 68, 90, 1);
-moz-box-shadow: 8px 9px 24px -4px rgba(66, 68, 90, 1);
box-shadow: 8px 9px 24px -4px rgba(66, 68, 90, 1);

`
const ScreenWrapperMain = styled.div`
    background-color: white;
    margin-top: 40px;
    width: 470px;
    min-height: 690px;
    height: auto;
    display: flex;
    flex-direction: column;
    

    -webkit-box-shadow: 8px 9px 24px -4px rgba(66, 68, 90, 1);
-moz-box-shadow: 8px 9px 24px -4px rgba(66, 68, 90, 1);
box-shadow: 8px 9px 24px -4px rgba(66, 68, 90, 1);

`

const Title = styled.h2`
    margin-top: 60px;

`

const Desc = styled.p`
    width: 50%;
`

const FullJourneyInfo = () => {
    return (
        <Container>
            <Title>EKI Wallet - First Time User</Title>
            <Desc></Desc>
            
            <ScreenWrapper>
                <MobileEntry />
            </ScreenWrapper>

            <ScreenWrapperMain>
                <MobileEntry5 />
            </ScreenWrapperMain>

            <ScreenWrapperMain>
                <BankingDetails />
            </ScreenWrapperMain>

            <ScreenWrapperMain>
                <MobileEntry4 />
            </ScreenWrapperMain>

            <ScreenWrapperMain>
                <MobileEntry6 />
            </ScreenWrapperMain>

            {/* <ScreenWrapperMain>
                <MobileEntry7 />
            </ScreenWrapperMain> */}

            <ScreenWrapperMain>
                <MobileEntry3 />
            </ScreenWrapperMain>

            <ScreenWrapperMain>
                <CheckRates />
            </ScreenWrapperMain>

            <ScreenWrapperMain>
                <MTCNLookUp />
            </ScreenWrapperMain>

            <ScreenWrapperMain>
                <MobileEntry9receive />
            </ScreenWrapperMain>

            <ScreenWrapperMain>
                <MobileEntry8 />
            </ScreenWrapperMain>

            <ScreenWrapperMain>
                <MobileEntry9 />
            </ScreenWrapperMain>

        </Container>
    )
}

export default FullJourneyInfo
