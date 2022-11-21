import { Box, useColorModeValue } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer';

import Nav from '../components/navbar';
import Body from '../sections/blog';

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

      <Nav />

      <main>
        
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
        </Box> */}
        <Body />
      </main>

      <Footer />
    </>
  )
}

export default Home
