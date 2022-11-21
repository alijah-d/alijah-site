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
			</main>
			
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default Home
