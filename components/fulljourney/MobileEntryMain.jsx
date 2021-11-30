import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import KHlogo from '../../public/img/knh.png'
import BackgroundPhoto from '../../public/img/background2.jpg'
import PaymentIcon from '@mui/icons-material/Payment';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';

const Wrapper = styled.div`
    position: absolute;
    width: 470px;
    min-height: 690px;
    
    z-index: 200;

`
const Background = styled.div`
    width: 100%;
    min-height: 690px;
    height: auto;
    z-index: 20;
    opacity: 0.9;
    display: block;
    filter: brightness(70%);
    
    
    
`

const NavBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
    padding-left: 20px;
    z-index: 999;

    -webkit-box-shadow: 3px 12px 24px 0px rgba(66, 68, 90, 0.36);
    -moz-box-shadow: 3px 12px 24px 0px rgba(66, 68, 90, 0.36);
    box-shadow: 3px 12px 24px 0px rgba(66, 68, 90, 0.36);



`

const Logo = styled.div`
    flex: 1;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 20px;
`
const NavMenu = styled.div` 
    color: rgb(79, 171, 234);
    flex: 9;
    display: flex;
    justify-content: flex-start;
    padding-right: 20px;
    cursor: pointer;

    div {
        margin-right: 10px;
        
    }
`

const Main = styled.div`
    flex: 5;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    
    h1 {
        text-align: center;
        font-size: 60px;
        font-weight: 500;
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-left: 40px;

    p {
        font-size: 15px;
        line-height: 5px;
    }
`

const Right = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 40px;

    p {
        font-size: 15px;
        line-height: 5px;
    }
`

const IconBar = styled.div` 
    width: 80%;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`
const IconItem = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 12px;
        text-align: center;
    }

`


const TopDesc = styled.div`
    flex: 2;
    min-height: 150px;
    background-color: rgb(220, 246, 250);
    color: rgb(86, 179, 223);
    padding: 2px;
   

    h3 {
        
        text-align: center;
        font-size: 30px;
        font-weight: 400;
    }
    h4 {
        
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        line-height: 4px;
    }
    h5 {
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: grey;
        line-height: 4px;

    }
    p {
        text-align: center;
        color: black;
        line-height: 5px;
    }
`

const Card = styled.div`
    /* border: 1px solid blue; */
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    color: rgb(79, 171, 234);

    p {
        font-size: 12px;
        text-align: center;
        line-height: 12px;
    }

    &:hover {
        color: gray;
    }

`

const Bottom = styled.div`
    
    flex: 1;
    margin-top: 30px;
    min-height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    
   
`

const NavBottom = styled.div`
    width: 100%;
    height: 60px;
`

const Button = styled.button`
    width: 90%;
    height: 50px;
    cursor: pointer;
    border: none;
    margin-top: 20px;
    font-size: 18px;
    background-color: rgb(79, 171, 234);
    color: white;
    /* margin-bottom: 20px; */
    font-size: 20px;
    font-weight: 400;
    border-radius: 5px;

`

const MobileEntryMain = () => {
    return (
        <>
            
                <Wrapper>
                    <NavBar>
                        <NavMenu>
                            <div>Hi, Piotr!</div>
                        </NavMenu>
                        <Logo>
                            <Image src={KHlogo} />
                        </Logo>
                    </NavBar>
                        <TopDesc>
                            <h4>K&H planner savings account</h4>
                            <h5>HU96 4444 4444 5555 6666 6666</h5>
                            <p><b>available balance: <span style={{color: 'green'}}>100 000 000 HUF</span></b></p>
                            <p><b>blocked balance:</b> 0 HUF</p>
                        </TopDesc>
                    <Main>
                        <Left>
                            <p>account owner</p>
                            <p>account type</p>
                            <p>currency</p>
                            <p>booked balance:</p>
                            <p>blocked amounts:</p>
                            <p>credit line:</p>
                            <p>GIRO number</p>
                            <p>SWIFT/BIC</p>
                        </Left>
                        <Right>
                            <p>Demo Denes</p>
                            <p>K&H savings account</p>
                            <p>HUF</p>
                            <p>100 000 000 HUF</p>
                            <p>0 HUF</p>
                            <p>0 HUF</p>
                            <p>444444444 - 555555555</p>
                            <p>OKHB HUHB</p>
                        </Right>
                        
                        
                        

                    </Main>
                    <Bottom>
                        <Card>
                            <PaymentIcon sx={{fontSize: 40}}/>
                            <p>HUF payment</p>
                        </Card>
                        <Card>
                            <HistoryIcon sx={{fontSize: 40}}/>
                            <p>account history</p>
                        </Card>
                        <Card>
                            <AccountBalanceIcon sx={{fontSize: 40}}/>
                            <p>financial transactions</p>
                        </Card>
                        <Card style={{backgroundColor: 'gold'}}>
                            <PublicIcon sx={{fontSize: 40}}/>
                            <p>International Payments</p>
                        </Card>
                        <Card></Card>
                                      
                    </Bottom>
                    
                </Wrapper>
        </>
    )
}

export default MobileEntryMain
