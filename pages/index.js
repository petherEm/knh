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
          <title>KnH Payments</title>
          <meta name="description" content="KnH" />
          <link rel="icon" href="#" /> 
        </Head>
       <Intro />
    </Container>
  )
}
