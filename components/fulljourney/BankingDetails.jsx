import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import KHlogo from '../../public/img/knh.png'

const Wrapper = styled.div`


`

const NavBar = styled.div`
    background-color: white;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    -webkit-box-shadow: 3px 12px 24px 0px rgba(66, 68, 90, 0.36);
    -moz-box-shadow: 3px 12px 24px 0px rgba(66, 68, 90, 0.36);
    box-shadow: 3px 12px 24px 0px rgba(66, 68, 90, 0.36);


`

const Logo = styled.div`
    flex: 1;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 20px;
    align-items: flex-end;
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

const TopDesc = styled.div`
    flex: 1;
    background-color: white;
    padding: 20px;
    color: rgb(79, 171, 234);
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

const InputBank = styled.select`
    width: 400px;
    height: 50px;
    border-radius: 10px;
    

    &:focus {
    outline: none !important;
    }

`

const InputIBAN = styled.input`
    width: 400px;
    height: 50px;
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
    flex: 2;
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

const BankingDetails = () => {
    return (
        <>
            <NavBar>
                <Logo>
                    <Image src={KHlogo} />
                </Logo>
                <NavMenu>
                    <div>Hello, Piotr</div>
                </NavMenu>
            </NavBar>
                <TopDesc>
                    <h3>Bank Details required to deposit WU Money Transfers</h3>
                </TopDesc>
            <Main>
                <div>
                    <InputBank placeholder="Piotr">
                        <option>Bank ZYX</option>
                        <option>BNP Paribas</option>
                        <option>Kredit Bank</option>
                        <option>AgriBank</option>
                        <option>BangBank</option>

                    </InputBank>
                    <Label>
                        Select your bank
                    </Label>
                </div>
                <div>
                    <InputIBAN placeholder="10 1234 5678 9876 4321 356" />
                    <Label>
                        Provide IBAN
                    </Label>
                </div>

                
            </Main>
            <Bottom>
                <Link href="/fullJourney">
                    <Button>Continue</Button>
                </Link>  
            </Bottom>
        </>
    )
}

export default BankingDetails
