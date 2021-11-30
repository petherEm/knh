import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import KHlogo from '../public/img/knh.png'
import BackgroundPhoto from '../public/img/background2.jpg'



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
    flex: 5;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: white;
    flex-wrap: wrap;
    
    h1 {
        text-align: center;
        font-size: 60px;
        font-weight: 500;
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
    color: gold;
    padding: 10px;

    h3 {
        font-size: 30px;
        font-weight: 300;
    }
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
    
    flex: 1;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

const MobileEntry = () => {
    return (
        <>
            <Background>
                <Image src={BackgroundPhoto} layout="responsive" />
            </Background>
                <Wrapper>
                    <NavBar>
                        <NavMenu>
                            <div>Burger</div>
                        </NavMenu>
                        <Logo>
                            <Image src={KHlogo} />
                        </Logo>
                    </NavBar>
                        <TopDesc>
                            
                        </TopDesc>
                    <Main>
                    
                        <h1 style={{marginLeft: '20px'}}>K&H <br />mobilbank</h1>
                        
                        

                    </Main>
                    <Bottom>
                        <Link href="/fullJourney">
                            <Button><b>mobilbank login</b></Button>
                        </Link>
                        <Link href="/fullJourney">
                            <Button><b>K&H+</b></Button>
                        </Link>
                        <Link href="/fullJourney">
                            <Button><b>mobile-token authentication</b></Button>
                        </Link>
                        <Link href="/fullJourney">
                            <Button><b>mobile-token signature</b></Button>
                        </Link>
                                      
                    </Bottom>
                    
                </Wrapper>
        </>
    )
}

export default MobileEntry
