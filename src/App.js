import logo from './logo.svg';
import './App.css';

export const App = () => {
	return (
    <div className="app">
    <h1 className={styles['page-heading']}>Ввод значения</h1>
    <p className={styles['no-margin-text']}>
      Текущее значение <code>value</code>: "<output className="current-value"></output>"
    </p>
    <div className="error">Введенное значение должно содержать минимум 3 символа</div>
    <div className={styles['buttons-container']}>
      <button className="button">Ввести новое</button>
      <button className="button" disabled>Добавить в список</button>
    </div>
    <div className={styles['list-container']}>
      <h2 className={styles['list-heading']}>Список:</h2>
      <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
      <ul className="list">
        <li className={styles['list-item']}>Первый элемент</li>
      </ul>
    </div>
  </div>
  );

	
};
