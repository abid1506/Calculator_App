import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import styles from './App.module.css'
import { useState } from 'react';

function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if(buttonText === "C"){
      setCalVal("");
    }
    else if (buttonText === "="){
      const result = eval(calVal);
      setCalVal(result)
    }
    else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <>
    <h2>Calculator</h2>
    <div className={styles.calc}>
      

    <div className={styles.calculator}>
      <Display displayValue = {calVal} > </Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
    </div>

    </>
  )
}
export default App
