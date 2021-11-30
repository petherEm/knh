import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
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

const MobileEntry8 = () => {
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
                    <h3>Your Transaction is almost done!</h3>
                    <h4>Please provide receiver's and transaction details</h4>
                </TopDesc>
            <Main>
                <div>
                    <Input placeholder="John"/>
                    <Label>
                        Receiver First Name
                    </Label>
                </div>
                <div>
                    <Input placeholder="Smith" />
                    <Label>
                        Receiver Last Name
                    </Label>
                </div>
                <div>
                    <Input placeholder="Gift" />
                    <Label>
                        Reason of transaction
                    </Label>
                </div>
                <div>
                    <Input placeholder="Salary" />
                    <Label>
                        Source of funds
                    </Label>
                </div>
                <div>
                    <Input placeholder="Family" />
                    <Label>
                        Relationship to Receiver
                    </Label>
                </div>
                
            </Main>
            <Bottom>
                <Link href="/fullJourney">
                    <Button>Send</Button>
                </Link>  
            </Bottom>
        </>
    )
}

export default MobileEntry8
