import React, {useState} from 'react';
import {
  Container,
  Screen,
  Body,
  Left,
  Column,
  Button,
  Right,
  Button2,
  Result
} from './styled';


export default () => {
  const sum = '+';
  const subtraction = '-';
  const division = '/';
  const multiplication = '*';

  const [textNumbers, setTextNumbers] = useState('0');
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);

  function calculation (num1, num2, operation) {
    let result;
    switch (operation){
      case sum:
        result = num1 + num2;
        break;
      case subtraction:
        result = num1 - num2;
        break;
      case multiplication:
        result = num1 * num2;
        break;
      case division:
        result = num1 / num2;
        break;
      default:
        return 0;
    }
    return result;
  }

  function concatenate (currentNum, concatNum) {
    if (currentNum === '0' || currentNum === null){
      currentNum = '';
    }
    if (concatNum === '.' && currentNum === ''){
      return '0.';
    }
    if (concatNum === '.' && currentNum.indexOf('.') > -1){
      return currentNum;
    }
    return currentNum + concatNum;
  }

  function addNumber (num) {
    let result;
    if (operation === null){
      result = concatenate(number1, num);
      setNumber1(result);
    }else{
      result = concatenate(number2, num);
      setNumber2(result);
    }

    setTextNumbers(result);
  }

  function operationType (op) {
    if (operation === null){
      setOperation(op);
      return;
    }

    if (number2 !== null){
      const result = calculation(parseFloat(number1), parseFloat(number2), operation);
      setOperation(op);
      setNumber1(result.toString());
      setNumber2(null);
      setTextNumbers(result.toString());
    }
  }

  function calculate () {
    if (number2 === null){
      return;
    }

    const result = calculation(parseFloat(number1), parseFloat(number2), operation);
    setTextNumbers(result);
  }

  function clean () {
    setTextNumbers('0');
    setNumber1('0');
    setNumber2(null);
    setOperation(null);
  }



  return (
    <Container>
        <Screen>
          <Result  type="text" value={textNumbers}></Result>
        </Screen>
        <Body>        
          <Left>
                  <Column>
                      <Button onClick={()=>addNumber('7')}>7</Button>
                      <Button onClick={()=>addNumber('8')}>8</Button>
                      <Button onClick={()=>addNumber('9')}>9</Button>
                  </Column>
                  <Column>
                      <Button onClick={()=>addNumber('4')}>4</Button>
                      <Button onClick={()=>addNumber('5')}>5</Button>
                      <Button onClick={()=>addNumber('6')}>6</Button>
                  </Column>
                  <Column>
                      <Button onClick={()=>addNumber('1')}>1</Button>
                      <Button onClick={()=>addNumber('2')}>2</Button>
                      <Button onClick={()=>addNumber('3')}>3</Button>
                  </Column>
                  <Column>
                      <Button onClick={()=>addNumber('0')}>0</Button>
                      <Button onClick={()=>addNumber('.')}>.</Button>
                      <Button onClick={calculate}>=</Button>
                  </Column>                  
              </Left>
              <Right>
                <Button2 onClick={clean}>C</Button2>
                <Button2 onClick={() => operationType(division)}>/</Button2>
                <Button2 onClick={() => operationType(multiplication)}>x</Button2>
                <Button2 onClick={() => operationType(subtraction)}>-</Button2>
                <Button2 onClick={() => operationType(sum)}>+</Button2>
            </Right>
            </Body>        
    </Container>
  );
}
