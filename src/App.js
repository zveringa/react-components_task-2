import styles from 'react';
import { useState } from 'react';
import './App.css';

export const App = () => {

  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение ');
    if (promptValue && promptValue.length >= 3) {
      setValue(promptValue);
      setError('');
    } else {
      setValue('');
      setError('Введенное значение должно содержать минимум 3 символа!');
    }
    
    console.log(`You entered ${promptValue}`);
  }

	return (
    <div className="app">
    <h1 className={styles['page-heading']}>Ввод значения</h1>
    <p className={styles['no-margin-text']}>
      Текущее значение <code>value</code>: "<output className="current-value">{value}</output>"
    </p>
    <div className="error">{error}</div>
    <div className={styles['buttons-container']}>
      <button className="button" onClick = {onInputButtonClick} >Ввести новое</button>
      <output>{value}</output>
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
