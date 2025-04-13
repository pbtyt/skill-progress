import { Components } from '@/components/components/Components';
import { Header } from '@/components/header';
import { Process } from '@/components/process/Process';
import { WhyUs } from '@/components/whyUs/whyUs';
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'Главная страница',
	...NO_INDEX_PAGE,
};

export default function HomePage() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Process />
				<WhyUs />
				<Components />
			</main>
		</>
	);
}
