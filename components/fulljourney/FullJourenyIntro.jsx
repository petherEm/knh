import React from 'react'
import styled from 'styled-components'
import MobileEntry from '../MobileEntry'
import MobileEntry8 from './MobileEntry8'
import MobileEntry9 from './MobileEntry9'
import CheckRates from './CheckRates'
import MobileEntryMain from './MobileEntryMain'

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ScreenWrapper = styled.div`
    background-color: white;
    margin-top: 40px;
    margin-bottom: 40px;
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
    margin-bottom: 40px;
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
            <Title>International Payments - Customer Experience</Title>
            <Title>SENDING MONEY FLOW</Title>
        
            
            <ScreenWrapper>
                <MobileEntry />
            </ScreenWrapper>

            <ScreenWrapperMain>
                <MobileEntryMain />
            </ScreenWrapperMain>

            <ScreenWrapperMain>
                <CheckRates />
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
