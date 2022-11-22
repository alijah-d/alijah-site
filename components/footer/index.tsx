import {
		Box,
		chakra,
		Stack,
		Text,
		Flex,
		useColorModeValue,
		VisuallyHidden,
	} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';
import { ReactNode } from 'react';
import { GITHUB, LINKEDIN, MEDIUM, TWITTER } from '../../lib/constant';

const SocialButton = ({
		children,
		label,
		href,
	}: {
		children: ReactNode;
		label: string;
		href: string;
	}) => {
		return (
			<chakra.button
				bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
				rounded={'full'}
				w={8}
				h={8}
				cursor={'pointer'}
				as={'a'}
				target={'_blank'}
				href={href}
				display={'inline-flex'}
				alignItems={'center'}
				justifyContent={'center'}
				transition={'background 0.3s ease'}
				_hover={{
					bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
				}}>
				<VisuallyHidden>{label}</VisuallyHidden>
				{children}
			</chakra.button>
		);
	};


export default function Footer() {
return (
		<Box
		bg={useColorModeValue('white', 'gray.800')}
		color={useColorModeValue('gray.700', 'gray.200')}
		bgGradient={useColorModeValue(
				'radial(gray.300 1px, transparent 1px)',
				'radial(gray.700 1px, transparent 1px)'
				)}
		backgroundSize="20px 20px"
		height="100%">
		<Box py={10}>
				<Flex
				align={'center'}
				_before={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: useColorModeValue('gray.200', 'gray.700'),
						flexGrow: 1,
						mr: 8,
				}}
				_after={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: useColorModeValue('gray.200', 'gray.700'),
						flexGrow: 1,
						ml: 8,
				}}>
				
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'LinkedIn'} href={LINKEDIN}>
						<FaLinkedin />
					</SocialButton>
					<SocialButton label={'Github'} href={GITHUB}>
						<FaGithub />
					</SocialButton>
					<SocialButton label={'Medium'} href={MEDIUM}>
						<FaMedium />
					</SocialButton>
					<SocialButton label={'Twitter'} href={TWITTER}>
						<FaTwitter />
					</SocialButton>
				</Stack>

				</Flex>
				<Text pt={6} fontSize={'sm'} textAlign={'center'}>
				© 2022 Alijah Luis Mancera
				</Text>
		</Box>
		</Box>
);
}