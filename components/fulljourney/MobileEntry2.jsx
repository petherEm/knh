import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
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
    margin-top: 20px;
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
    flex: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const TopDesc = styled.div`
    flex: 2;
    background-color: white;
    padding: 10px;
`

const Card = styled.div`
    border: 1px solid goldenrod;
    width: 180px;
    height: 200px;
    border-radius: 20px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`

const Bottom = styled.div`
    background-color: white;
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

const MobileEntry2 = () => {
    return (
        <>
            <NavBar>
                <Logo>
                    <Image src={EKIlogo} />
                </Logo>
                <NavMenu>
                    <div>item</div>
                    <div>item</div>
                    <div>item</div>
                </NavMenu>
            </NavBar>
                <TopDesc>
                    <h3>Hello, Piotr. How is it going today?</h3>
                </TopDesc>
            <Main>
                <Card>
                    placeholder
                </Card>
                <Card>
                    placeholder
                </Card>
                <Card>
                    placeholder
                </Card>
                <Card>
                    placeholder
                </Card>

            </Main>
            <Bottom>
                <Link href="/fullJourney">
                    <Button>Continue</Button>
                </Link>  
            </Bottom>
        </>
    )
}

export default MobileEntry2
