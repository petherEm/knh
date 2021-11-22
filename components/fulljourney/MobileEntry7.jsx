import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Turkey from '../../public/img/TurkeyFlag.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StoreIcon from '@mui/icons-material/Store';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RaiPayLogo from '../../public/img/raipaypng.png'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EKIlogo from '../../public/img/EKIlogo.png'


const Wrapper = styled.div`


`

const NavBar = styled.div`
    background-color: black;
    color: white;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    
    padding-left: 20px;


`

const Logo = styled.div`
    flex: 1;
    cursor: pointer;
`
const NavMenu = styled.div` 
    color: gold;
    flex: 9;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    cursor: pointer;

    div {
        margin-right: 10px;
    }
`

const Main = styled.div`
    background-color: black;
    color: gold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

const Card = styled.div`
    border: 1px solid goldenrod;
    width: 130px;
    height: 130px;
    border-radius: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    p {
        font-size: 12px;
        margin: 1px
    }

    &:hover {
        opacity: 0.8;
    }

`

const MuiIcon = styled.div`
    position: absolute;
    z-index: 99;
    top: 0;
    right: 0;
    transform: translate(10px, -10px);
    color: lightgreen;

`

const InputItem = styled.div`
    display: flex;
    color: gold;

    h4 {
        margin: 2px;
        font-weight: 400;
        
    }

`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
   

`
    

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const TopDesc = styled.div`

    background-color: black;
    padding: 15px;
    color: white;
    line-height: 1.5;
    text-align: center;
    display: flex;
    flex-direction: column;
    
    h3 {
        display: flex;
        justify-content: center;
        align-items: center;


    }
    
    
`

const Hr = styled.hr`
    width: 90%;
    color: gold;
`


const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* background-color: tomato; */
    align-items: center;
    justify-content: center;
    /* justify-content: center;
    align-items: center; */
   
`
const Icon = styled.div`
    border: 1px solid white;
    background-color: black;
    width: 75px;
    height: 95px;
    border-radius: 20px;
    margin: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    cursor: pointer;

    p {
        font-size: 8px;
    }

    &:hover {
        opacity: 0.8;
    }

`
const Input = styled.input`
    width: 180px;
    height: 35px;
    border-radius: 10px;

    &:focus {
    outline: none !important;
}
`
const Label = styled.p` 
    font-size: 12px;
`

const Bottom = styled.div`
    background-color: black;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    width: 80%;
    height: 50px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    font-size: 18px;
    background-color: gold;
    margin-bottom: 20px;

    &:hover {
        background-color: goldenrod;
    }

`

const MobileEntry7 = () => {
    return (
        <>
            <NavBar>
                <Logo>
                    <Image src={RaiPayLogo} />
                </Logo>
                <NavMenu>
                    <div>Hi, Piotr!</div>
                </NavMenu>
            </NavBar>
            <TopDesc>
                <h2>Thank you! You have been successfully verified! </h2>
                <h3>Continue your payment to &#8205; <Image src={Turkey} width={50} height={30}/></h3>
            </TopDesc>
            <Main>
                <InputItem>
                    <Left>
                        <Input placeholder="300 EUR"/>
                        <Label>You are sending</Label>
                    </Left>
                    <Right>
                        <Input placeholder="3.629 TRY"/>
                        <Label>Receiver gets</Label>
                    </Right>
                </InputItem>
                    <h4>1 CHF = 12.10 TRY</h4>
                    <p>How your receiver would like to pick up money?</p>
                <InputItem>
                    <Left>
                        <Card>
                            <MuiIcon>
                                <CheckCircleIcon sx={{ fontSize: 30 }}/>
                            </MuiIcon>
                            <StoreIcon sx={{ fontSize: 70 }}/>
                            <p>Cash at WU location</p>
                            <p><strong>Instant Payment</strong></p>
                        </Card>
                    </Left>
                    <Right>
                        <Card>
                            <AccountBalanceIcon sx={{ fontSize: 70 }}/>
                            <p>to Bank Account</p>
                            <p><strong>Instant Payment</strong></p>
                        </Card>
                        
                    </Right>
                </InputItem>
                    <p>You are paying with</p>
                <InputItem>
                    <Left>
                        <Card>
                            <MuiIcon>
                                <CheckCircleIcon sx={{ fontSize: 30 }}/>
                            </MuiIcon>
                            <CreditCardIcon sx={{ fontSize: 70 }} />
                            <p>RaiPay card ending:</p>
                            <p><strong>3896</strong></p>
                            
                        </Card>
                    </Left>
                    <Right>
                        <Card>
                            <CreditCardIcon sx={{ fontSize: 70 }} />
                            <p>MasterCard ending:</p>
                            <p><strong>9936</strong></p>
                            
                        </Card>
                    </Right>
                </InputItem>
                <h3>Transaction Summary:</h3>
                    <Hr />
                    
            </Main>
                
                <InputItem style={{
                        flexDirection: 'column', 
                        backgroundColor: 'black',
                        padding: '20px'
                        }}>
                    <h4>Send amount: 300 EUR</h4>
                    <h4>Receiver gets: 3.629 TRY</h4>
                    <h4>Fees: 3.5 EUR</h4>
                    <h4>Destination Country: Turkey</h4>
                    <h4>Delivery time: In seconds</h4>
                    <h3><b>Total Amount: </b>303.5 EUR</h3>
                </InputItem>
            <Bottom>
                <Button>Continue</Button>
            </Bottom>
            
            
        </>
    )
}

export default MobileEntry7
