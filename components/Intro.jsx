import React from 'react'
import styled from 'styled-components'
import MobileEntry from './MobileEntry'


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: rgb(249, 222, 75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ScreenWrapper = styled.div`
    background-color: white;
    width: 470px;
    min-height: 690px;
    height: auto;
    display: flex;
    flex-direction: column;
    
    margin-bottom: 60px;

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

const Intro = () => {
    return (
        <Container>
            <Title>Let's walk through CX WU@EKI ABMT 'receive'</Title>
            <Desc>
                
            </Desc>
            
            <ScreenWrapper>
                <MobileEntry />
            </ScreenWrapper>

        </Container>
    )
}

export default Intro
