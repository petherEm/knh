import Head from 'next/head'
import Intro from '../components/Intro'
import styled from 'styled-components'
import Footer from '../components/Footer'


const Container = styled.div`
    height: 100vh;
    width: 100%;
  
`


export default function Index() {
  return (
    <Container>
        
        <Head>
          <title>EkiTransfer To Account</title>
          <meta name="description" content="RaiPay" />
          <link rel="icon" href="#" /> 
        </Head>
       <Intro />
    </Container>
  )
}
