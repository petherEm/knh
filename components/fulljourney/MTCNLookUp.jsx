import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import TwintLogo from '../../public/img/twintlogo.png'
import WUlogo from '../../public/img/wu.png'
import SonectLogo from '../../public/img/sonect.png'
import IDver2 from '../../public/img/IDVer2.jpg'
import Selfie from '../../public/img/selfie2.jpg'
import Step1 from '../../public/img/step1.jpg'
import Turkey from '../../public/img/TurkeyFlag.png'
import PFTwint from '../../public/img/PFTwint.png'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StoreIcon from '@mui/icons-material/Store';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RaiPayLogo from '../../public/img/raipaypng.png'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EKIlogo from '../../public/img/EKIlogo.png'
import KHlogo from '../../public/img/knh.png'
import { fontWeight } from '@mui/system'


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
    z-index: 99;
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
    flex: 1;
    background-color: white;
    padding: 20px;
    color: rgb(79, 171, 234);
    line-height: 1.5;
    text-align: center;
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
    width: 280px;
    height: 35px;
    border-radius: 10px;
    margin-right: 15px;

    &:focus {
    outline: none !important;
}

`

const InputAmount = styled.input`
    width: 180px;
    height: 35px;
    border-radius: 10px;

    &:focus {
    outline: none !important;
}

`

const InputCountry = styled.select` 
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
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    width: 90%;
    height: 50px;
    cursor: pointer;
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    background-color: rgb(79, 171, 234);
    color: white;
    /* margin-bottom: 20px; */
    font-size: 20px;
    font-weight: 400;
    border-radius: 5px;

    &:hover {
        background-color: gray;
    }

`

const MTCNLookUp = () => {
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
                <h2>Good Morning! You selected WU transfer deposit to your K&H Bank
                    <span style={{ color: "lightblue",  fontWeight:"bold" }}> ** *** *** *** *** *** 8456 account 
                    </span>
                </h2>
            </TopDesc>
            <Main>

                <CountrySelection>
                    <Country>
                        <h4>MTCN: </h4>
                    </Country>
                    <Input placeholder="012 345 6789" />

                </CountrySelection>
                
                <InputItem>
                    <Left>
                        <InputAmount placeholder="300 EUR"/>
                        <Label>Expected Amount</Label>
                    </Left>
                    <Right>
                        <InputCountry placeholder="Germany">
                            <option>Germany</option>
                            <option>Switzerland</option>
                            <option>Austria</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                        </InputCountry>
                        <Label>Sending Country</Label>
                    </Right>
                </InputItem>
                <InputItem>
                    <Left>
                        <InputAmount placeholder="John"/>
                        <Label>Sender's First Name</Label>
                    </Left>
                    <Right>
                        <InputAmount placeholder="Smith"/>
                        <Label>Sender's Last Name</Label> 
                    </Right>
                </InputItem>
                    <p>Where would you like to deposit your money</p>
                <InputItem>
                    <Left>
                        <Card>
                            <MuiIcon>
                                <CheckCircleIcon sx={{ fontSize: 30 }}/>
                            </MuiIcon>
                            <AccountBalanceIcon sx={{ fontSize: 60 }}/>
                            <p>XYZ Bank Acc <br></br>***8456</p>

                        </Card>
                    </Left>
                    <Right>
                        <Card>
                            <AccountBalanceIcon sx={{ fontSize: 60 }}/>
                            <p>WWW Bank Acc <br></br>***9916</p>
                            
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

export default MTCNLookUp
