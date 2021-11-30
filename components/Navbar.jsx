import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import EKIlogo from '../public/img/EKIlogo.png'
import KnHlogo from '../public/img/knh.png'

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    font-size: 18px;
    text-decoration: none;
    z-index: 999;

    -webkit-box-shadow: 3px 12px 24px 0px rgba(66, 68, 90, 0.36);
    -moz-box-shadow: 3px 12px 24px 0px rgba(66, 68, 90, 0.36);
    box-shadow: 3px 12px 24px 0px rgba(66, 68, 90, 0.36);


`

const Logo = styled.div`
    text-decoration: none;
    cursor: pointer;
`
const UnorderedList = styled.ul`
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin-right: 30px; */
`
const NavItem = styled.li`
    display: inline;
    margin-right: 30px;
    font-size: 14px;
    color: black;
    cursor: pointer;

    &:hover {
        color: gray;
    }
`

const Navbar = () => {
    return (

        <Container>
            <Link href="/">
                <Logo>
                    <Image src={KnHlogo} width={50} height={50}/>
                </Logo>
            </Link>
            <UnorderedList>
                <Link href="/fullJourney">
                    <NavItem>
                        Send Flow
                    </NavItem>
                </Link>
                <Link href="/ReceiveCustomerJourney">
                    <NavItem>
                        Receive flow
                    </NavItem>
                </Link>
                {/* <Link href="/verificationJourney">
                    <NavItem>
                        Verification
                    </NavItem>
                </Link> */}
                {/* <Link href="#">
                    <NavItem>
                        Challenges
                    </NavItem>
                </Link> */}
            </UnorderedList>
        </Container>
    )
}

export default Navbar
