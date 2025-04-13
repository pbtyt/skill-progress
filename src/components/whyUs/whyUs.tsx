import { Logo } from '@/shared/ui/Logo';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import styles from './whyUs.module.scss';
export function WhyUs() {
	return (
		<div className={styles.whyUsWrapper}>
			<div className={styles.aboutSPWrapper}>
				<h2>
					Почему
					<br />
					SkillProgress?
				</h2>

				<div className={styles.aboutInfo}>
					<p>
						<span className={styles.selected}>
							SkillProgress — оптимизация ПК для геймеров и стримеров.
						</span>{' '}
						Повышаем FPS, стабилизируем систему, разгоняем компоненты и проводим
						диагностику для максимальной производительности.
					</p>
					<p>
						Мы — надёжный сервис по настройке ПК, развивая полноценную
						инфраструктуру для удобства пользователей.
						<span className={styles.selected}>
							{' '}
							В отличие от конкурентов, работающих через сарафанное радио и
							разрозненные Discord-сообщества.
						</span>
					</p>
				</div>
			</div>

			<div className={styles.SPFeatures}>
				<div className={styles.description}>
					<div style={{ width: '48px', marginBottom: '2rem' }}>
						<Logo />
					</div>

					<div style={{ background: '#FFFFFF4D', height: '1px' }}></div>

					<p style={{ width: '500px' }}>
						FIX Bg With Border))) <br />
						Каждый компьютер — уникален, и мы подходим к оптимизации
						персонально. Мы анализируем характеристики вашей системы, учитываем
						используемые игры и программы, а затем подбираем оптимальные
						настройки для максимальной производительности без риска для
						стабильности.
					</p>
				</div>
				<div className={styles.featuresList}>
					<button className={styles.feature}>
						<h3>ИНДИВИДУАЛЬНЫЙ ПОДХОД</h3>
						<ArrowRight width={32} height={32} color='#FFFFFF33' />
					</button>
					<button className={styles.feature}>
						<h3>ПОВЫШАЕМ FPS НА 20%</h3>
						<ArrowRight width={32} height={32} color='#FFFFFF33' />
					</button>
					<button className={styles.feature}>
						<h3>избавляем вас от лагов</h3>
						<ArrowRight width={32} height={32} color='#FFFFFF33' />
					</button>
					<button className={clsx(styles.feature, styles.active)}>
						<h3>Эффективная оптимизация</h3>
						<ArrowRight width={32} height={32} color='#FFFFFF33' />
					</button>
				</div>
			</div>
		</div>
	);
}
