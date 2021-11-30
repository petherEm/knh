import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import WUlogo from '../../public/img/wu.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StoreIcon from '@mui/icons-material/Store';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import KHlogo from '../../public/img/knh.png'


const Wrapper = styled.div`


`

const NavBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
    padding-left: 20px;
    z-index: 999;


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
    background-color: white;
    color: rgb(79, 171, 234);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

const Card = styled.div`
    border: 1px solid rgb(79, 171, 234);
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
    z-index: 299;
    top: 0;
    right: 0;
    transform: translate(10px, -10px);
    color: lightgreen;


`

const InputItem = styled.div`
    display: flex;
    align-items: center;
    color: rgb(79, 171, 234);

    h4 {
        margin: 2px;
        font-weight: 400;
        
    }

`

const CountrySelection = styled.div` 
    width: 90%;
   
    height: 40px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Country = styled.div`
    flex: 1;
    margin-left: 20px;
`
const CountryInput = styled.select` 
    flex: 0.9;
    margin: 10px;
    height: 40px;
    border-radius: 10px;
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

    background-color: white;
    padding: 15px;
    color: rgb(79, 171, 234);
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
    color: rgb(79, 171, 234);
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
    border: 1px solid rgb(79, 171, 234);
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
    color: rgb(79, 171, 234);

    &:focus {
    outline: none !important;
    
}
`
const Label = styled.p` 
    font-size: 12px;
`

const Bottom = styled.div`
    background-color: white;
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
    background-color: rgb(79, 171, 234);
    margin-bottom: 20px;

    &:hover {
        background-color: goldenrod;
    }

`

const CheckRates = () => {
    return (
        <>
            <NavBar>
                <NavMenu>
                    <div>Hi, Piotr!</div>
                </NavMenu>
                <Logo>
                    <Image src={KHlogo} />
                </Logo>
            </NavBar>
            <TopDesc>
                <h2>Good Morning! Check our low rates! </h2>
            </TopDesc>
            <Main>

                <CountrySelection>
                    <Country>
                        <h4>Sending to: </h4>
                    </Country>

                    <CountryInput placeholder="Turkey">
                        <option>China</option>
                        <option>Thailand</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                        <option>Serbia</option>
                    </CountryInput>

                </CountrySelection>
                
                <InputItem>
                    <Left>
                        <Input placeholder="100 000 HUF"/>
                        <Label>You are sending</Label>
                    </Left>
                    <Right>
                        <Input placeholder="1776.48 CNY"/>
                        <Label>Receiver gets</Label>
                    </Right>
                </InputItem>
                    <h4>FX Rate: <span style={{fontWeight: '300'}}>1 HUF = 0.0178 CNY</span></h4>
                    <h4>FEE: <span style={{fontWeight: '300'}}>+690 HUF </span></h4>
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
                    <p>Select account to debit:</p>
                <InputItem>
                    <Left>
                        <Card>
                            <AccountBalanceIcon sx={{ fontSize: 70 }} />
                            <p>Acc number ending:</p>
                            <p><strong>**3896</strong></p>
                            
                        </Card>
                    </Left>
                    <Right>
                        <Card>
                            <MuiIcon>
                                <CheckCircleIcon sx={{ fontSize: 30 }}/>
                            </MuiIcon>
                            <AccountBalanceIcon sx={{ fontSize: 70 }} />
                            <p>Acc number ending:</p>
                            <p><strong>**9936</strong></p>
                            
                        </Card>
                    </Right>
                </InputItem> 
            </Main>
                
            <Bottom>
                <Button>Continue</Button>
            </Bottom>
            
            
        </>
    )
}

export default CheckRates
