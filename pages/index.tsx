import { Box, useColorModeValue } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer';
import LandingPage from '../components/hero';

import Nav from '../components/navbar';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Alijah Mancera</title>
        <meta
          name="description"
          content='Alijah Mancera'
        />
      </Head>

      <main>
        <Nav />
        <LandingPage />
        
        {/* <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              'radial(gray.400 1px, transparent 1px)',
              'radial(gray.600 1px, transparent 1px)'
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>    */}
      </main>
      <br />
      <br />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
