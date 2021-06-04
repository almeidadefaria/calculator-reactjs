import React, {useState} from 'react';
import {
  Container,
  Screen,
  Body,
  Left,
  Column,
  Button,
  Right,
  Button2
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

  calculation = (num1, num2, operation) => {
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

  concatenate = (currentNum, concatNum) => {
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

  addNumber = (num) => {
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

  operationType = (op) => {
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

  return (
    <Container>
        <Screen></Screen>
        <Body>        
          <Left>
                  <Column>
                      <Button>7</Button>
                      <Button>8</Button>
                      <Button>9</Button>
                  </Column>
                  <Column>
                      <Button>4</Button>
                      <Button>5</Button>
                      <Button>6</Button>
                  </Column>
                  <Column>
                      <Button>1</Button>
                      <Button>2</Button>
                      <Button>3</Button>
                  </Column>
                  <Column>
                      <Button>0</Button>
                      <Button>.</Button>
                      <Button>=</Button>
                  </Column>                  
              </Left>
              <Right>
                <Button2>C</Button2>
                <Button2>/</Button2>
                <Button2>x</Button2>
                <Button2>-</Button2>
                <Button2>+</Button2>
            </Right>
            </Body>        
    </Container>
  );
}
