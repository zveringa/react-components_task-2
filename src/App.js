import styles from './app.module.css';
import data from './data.json';
import {useState} from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const onBackButtonClick = () => {
		setActiveIndex(activeIndex-1);
	}
	const onForwardButtonClick = () => {
		setActiveIndex(activeIndex+1);
	}
	const onBeginButtonClick = () => {
		setActiveIndex(0);
	}

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
						<  li key = {index} className={`${styles['steps-item']} ${activeIndex === index ? styles.active : '' } ${index <= activeIndex ? styles.done : ''}`}>
							<button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>
								{index + 1}
							</button>Шаг {index + 1}
						</li>
					))}
					</ul>
					
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={onBackButtonClick} disabled = {isFirstStep}> 
						Назад</button>
						<button className={styles.button} onClick={!isLastStep ? onForwardButtonClick : onBeginButtonClick} >
							{!isLastStep ? 'Далее' : 'Начать сначала'} 
							</button>
					</div>
				</div>
			</div>
		</div>
	);
};
