import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import Link from 'next/link';
import styles from './Logo.module.css';

export function Logo() {
	return (
		<Link href={SITE_ROUTES_BASE.HOME} className={styles.logoWrapper}>
			<img src='./Logo.png' alt='' className={styles.logo} />
		</Link>
	);
}
