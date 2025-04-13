import { Button } from '@/shared/ui/Button';
import clsx from 'clsx';
import styles from './Components.module.scss';

export function Components() {
	return (
		<section className={clsx(styles.componentsContainer, styles.bgWrapper)}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<div className={styles.info}>
						<h2>КАКИЕ КОМПОНЕНТЫ ПК ПОВЫШАЮТ ЕГО ПРОИЗВОДИТЕЛЬНОСТЬ?</h2>
						<p>
							Проводим консультацию по улучшению работоспособности вашего
							компьютера
						</p>
					</div>

					<div className={styles.counselling}>
						<p>
							После консультации предлагаем выгодный вариант оптимизации вашего
							компьютера
						</p>

						<Button
							buttonText='Бесплатная консультация'
							className={styles.button}
						/>
					</div>
				</div>

				<div className={styles.right}>
					<div className={styles.componentInfoWrapper}>
						<img src='product.png' alt='' className={styles.componentImg} />
						<h3 className={styles.componentName}>ВИДЕОКАРТА</h3>
						<p className={styles.componentDesc}>
							Видеокарта повышает производительность ПК, ускоряя рендеринг
							графики, видео и 3D-моделей благодаря GPU. Она поддерживает
							технологии CUDA и OpenCL для сложных вычислений, разгружая CPU и
							делая компьютер быстрее.
						</p>
					</div>

					<div className={styles.selector}>
						<button className={clsx(styles.select, styles.active)}></button>
						<button className={clsx(styles.select)}></button>
						<button className={clsx(styles.select)}></button>
						<button className={clsx(styles.select)}></button>
					</div>
				</div>
			</div>

			<div className={styles.circleL}></div>
			<div className={styles.circleB}></div>
		</section>
	);
}
