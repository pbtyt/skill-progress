import { SITE_ROUTES_BASE } from '@/shared/config/page-url.config';
import { Logo } from '@/shared/ui/Logo';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Header.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<Logo />

			<>
				<nav className={styles.navBar}>
					<ul className={styles.navButtons}>
						<li className={styles.navButton}>
							<Link href={SITE_ROUTES_BASE.ABOUT_US}>О нас</Link>
						</li>
						<li className={styles.navButton}>
							<Link href={SITE_ROUTES_BASE.SERVICES}>Услуги</Link>
						</li>
						<li className={styles.navButton}>
							<Link href={SITE_ROUTES_BASE.FEEDBACK}>Отзывы</Link>
						</li>
						<li className={styles.navButton}>
							<Link href={SITE_ROUTES_BASE.QUESTIONS}>Вопросы и ответы</Link>
						</li>
					</ul>
				</nav>

				<div className={styles.socialMediaWrapper}>
					<a href='./' className={clsx(styles.socialMedia, styles.discord)}>
						<div>
							<img src='./discord.svg' alt='' />
						</div>
					</a>
					<a href='./' className={clsx(styles.socialMedia, styles.telegram)}>
						<div>
							<img src='./telegram.svg' alt='' />
						</div>
					</a>
				</div>
			</>
		</header>
	);
}
