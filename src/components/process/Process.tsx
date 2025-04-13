import { Button } from '@/shared/ui/Button';
import clsx from 'clsx';
import styles from './process.module.scss';

export function Process() {
	return (
		<section className={clsx(styles.whyUsContainer, styles.bgWrapper)}>
			<div className={styles.wrapper}>
				<div className={clsx(styles.optzWrapper, styles.before)}>
					<div className={styles.headerTitle}>До оптимизации</div>
					<div className={styles.title}>30-60 FPS</div>
				</div>
				<div style={{ height: '100px' }}></div>

				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-end',
					}}
				>
					<div className={styles.info}>
						<h1>
							Простая, эффективная и безопасная оптимизация Windows для
							максимальной производительности
						</h1>
						<p>Забудьте про маленький FPS, лаги и задержки.</p>
						<Button buttonText='Оставить заявку' />
					</div>

					<div className={clsx(styles.optzWrapper, styles.after)}>
						<div className={styles.headerTitle}>После оптимизации</div>
						<div className={styles.title}>150-300 FPS</div>
					</div>
				</div>
			</div>

			<img src='./Arrow.svg' alt='' className={styles.line} />

			<div className={styles.circleL}></div>
			<div className={styles.circleR}></div>
			<div className={styles.circleB}></div>
		</section>
	);
}
