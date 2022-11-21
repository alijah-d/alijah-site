import { EmailIcon } from '@chakra-ui/icons';
import {
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Image,
	Icon,
	IconProps,
	useColorModeValue,
  } from '@chakra-ui/react';
import Link from 'next/link';
import { EMAIL } from '../../lib/constant';
  
export default function LandingPage() {
return (
	<Container
	bgGradient={useColorModeValue(
		'radial(gray.300 1px, transparent 1px)',
		'radial(gray.700 1px, transparent 1px)'
		)}
	backgroundSize="20px 20px"
	height="100%"
	maxW={'10xl'}>
	<Box
		padding={'5'}>   
	<Stack
		align={'center'}
		spacing={{ base: 8, md: 10 }}
		py={{ base: 20, md: 28 }}
		direction={{ base: 'column', md: 'row' }}>
		<Stack flex={1} spacing={{ base: 5, md: 3 }}>
		<Box
		display="flex"
		flex="1"
		marginRight="3"
		position="relative"
		alignItems="center">
			<Box
			zIndex="2"
			marginLeft={{ base: '0', sm: '5%' }}
			marginTop="5%">
				<Heading
				lineHeight={1.1}
				fontWeight={600}
				fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
				<Text
					as={'span'}
					position={'relative'}>
					Alijah Luis Mancera
				</Text>
				</Heading>
				<Text color={'gray.500'}>
				Software Engineer • Philippines
				</Text>

				<br/>

				<Link href={`mailto:${EMAIL}`} >
					<Button
						variant={'solid'}
						size={'lg'}
						fontWeight={'normal'}
						px={6}
						colorScheme={'messenger'}
						bg={'#1982FC'}
						_hover={{ bg: '#0869da' }}
						leftIcon={<EmailIcon />}
						boxShadow='xl' p='6' rounded='md'
						justifyContent={'flex-start'}>
						
						<Text color={useColorModeValue('white', 'gray.900')}>
							Say hello &#x2192;
						</Text>
						
					</Button>
				</Link>
			</Box>

		</Box>
		
		<Stack
			spacing={{ base: 4, sm: 6 }}
			direction={{ base: 'column', sm: 'row' }}>

		<Box
		marginLeft={{ base: '0', sm: '5%' }}>
			
		</Box>
			
		</Stack>
		</Stack>
		<Flex
		flex={1}
		justify={'center'}
		align={'center'}
		position={'relative'}
		w={'full'}>
		<Blob
			w={'150%'}
			h={'150%'}
			position={'absolute'}
			top={'-20%'}
			left={0}
			zIndex={-1}
			color={useColorModeValue('messenger.50', 'messenger.400')}
		/>
		<Box
			position={'relative'}
			height={'300px'}
			rounded={'2xl'}
			boxShadow={'2xl'}
			width={'full'}
			overflow={'hidden'}>
			<Image
			alt={'Hero Image'}
			fit={'cover'}
			align={'center'}
			w={'100%'}
			h={'100%'}
			src={
				'https://unsplash.com/photos/hwLAI5lRhdM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8amFwYW58ZW58MHx8fHwxNjY5MDMzNDk2&force=true&w=1920'
			}
			/>
		</Box>
		</Flex>
	</Stack>
	</Box>
	
	</Container>
);
}

export const Blob = (props: IconProps) => {
return (
	<Icon
	width={'100%'}
	viewBox="0 0 578 440"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...props}>
	<path
		fillRule="evenodd"
		clipRule="evenodd"
		d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
		fill="currentColor"
	/>
	</Icon>
);
};