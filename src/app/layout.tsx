import { SITE_NAME } from '@/shared/constants/seo.constants';
import { Header } from '@/widgets/header';
import { Modals } from './(components)/modals';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './(components)/providers';
import './global.css';

const zen = Inter({
	subsets: ['cyrillic', 'latin', 'cyrillic-ext'],
	weight: ['300', '400', '500', '500', '700', '800'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal'],
});

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `${SITE_NAME} | %s`,
	},
	description: '',
	// icons: {
	// 	icon: '/favicon32.png',
	// },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body id='body' className={zen.className} style={{}}>
				<Providers>
					<Header />
					{children}
					<Modals />
				</Providers>
			</body>
		</html>
	);
}
