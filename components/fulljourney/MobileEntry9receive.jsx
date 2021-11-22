import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import RaiPayLogo from '../../public/img/raipaypng.png'
import CreditCardIcon from '@mui/icons-material/CreditCard';


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
    padding: 20px;
    color: gold;
    flex: 8;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`

const TopDesc = styled.div`
    flex: 1;
    background-color: black;
    padding: 20px;
    color: white;
    line-height: 1.5;
    text-align: center;
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
    width: 300px;
    height: 28px;
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
    flex: 2;
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

const MobileEntry9receive = () => {
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
                    <h1>Thank you! We are now saving your money from: </h1>
                </TopDesc>
            <Main>
                
                <h1>MTCN: 0123 456 789</h1>
                <h2>to:</h2>
                <h1>XYZ Bank Acc ***8456</h1>
                
            </Main>
            <Bottom>
                <Link href="/fullJourney">
                    <Button>Next!</Button>
                </Link>  
            </Bottom>
        </>
    )
}

export default MobileEntry9receive
