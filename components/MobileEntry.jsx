import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import RaipayLogo from '../public/img/raipaypng.png'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EKIlogo from '../public/img/EKIlogo.png'

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
    background-color: black;
    color: white;
    flex-wrap: wrap;
    
    h1 {
        font-size: 50px;
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
    background-color: black;
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
    background-color: gold;
    flex: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavBottom = styled.div`
    width: 100%;
    height: 60px;
`

const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    font-size: 18px;
    background-color: gold;
    /* margin-bottom: 20px; */
    font-size: 20px;
    font-weight: 400;

`

const MobileEntry = () => {
    return (
        <>
            <NavBar>
                <Logo>
                    <Image src={EKIlogo} />
                </Logo>
                <NavMenu>
                    <div>Hello!</div>
                </NavMenu>
            </NavBar>
                <TopDesc>
                    <h3>How is it going today?</h3>
                </TopDesc>
            <Main>
            
                <Image src={EKIlogo} width={150} height={150} />
                <h1 style={{marginLeft: '20px'}}>eWallet</h1>
                <IconBar>
                    <IconItem>
                        <PhoneAndroidIcon sx={{ fontSize: 40 }}/>
                        <p>WU MTCN deposits</p>
                    </IconItem>
                    <IconItem>
                        <ViewCarouselIcon sx={{ fontSize: 40 }}/>
                        <p>Financial Services <br /> in one place</p>
                    </IconItem>
                    <IconItem>
                        <VerifiedUserIcon sx={{ fontSize: 40 }}/> 
                        <p>Private <br /> and secure</p>
                    </IconItem>
                </IconBar>

            </Main>
            <Bottom>
                <Link href="/fullJourney">
                    <Button><b>Let's Go!</b></Button>
                </Link>             
            </Bottom>
        </>
    )
}

export default MobileEntry
