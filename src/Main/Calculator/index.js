import React from 'react';
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

  return (
    <Container>
        <Screen id="screen"></Screen>
        <Body>        
          <Left>
                  <Column>
                      <Button value="7" type="text" id="7">7</Button>
                      <Button value="8" type="text" id="8">8</Button>
                      <Button value="9" type="text" id="9">9</Button>
                  </Column>
                  <Column>
                      <Button value="4" type="text" id="4">4</Button>
                      <Button value="5" type="text" id="5">5</Button>
                      <Button value="6" type="text" id="6">6</Button>
                  </Column>
                  <Column>
                      <Button value="1" type="text" id="1">1</Button>
                      <Button value="2" type="text" id="2">2</Button>
                      <Button value="3" type="text" id="3">3</Button>
                  </Column>
                  <Column>
                      <Button value="0" type="text" id="0">0</Button>
                      <Button value="." id="point">.</Button>
                      <Button value="=" id="equal">=</Button>
                  </Column>                  
              </Left>
              <Right>
                <Button2 value="c" class="columns2" id="clear">C</Button2>
                <Button2 value="/" class="columns2" id="division">/</Button2>
                <Button2 value="x" class="columns2" id="multiplication">x</Button2>
                <Button2 value="-" class="columns2" id="subtraction">-</Button2>
                <Button2 value="+" class="columns2" id="addition">+</Button2>
            </Right>
            </Body>        
    </Container>
  );
}
