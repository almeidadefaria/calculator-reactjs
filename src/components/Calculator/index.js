import React from 'react';
import {
  Container,
  Body,
  Left} from './styled';


export default () => {

  return (
    <Container>
        <div id="screen"></div>
        <Body>        
          <Left class="left">
                  <div class="columns">
                      <button value="7" class="numbers" type="text" id="7">7</button>
                      <button value="8" class="numbers" type="text" id="8">8</button>
                      <button value="9" class="numbers" type="text" id="9">9</button>
                  </div>
                  <div class="columns">
                      <button value="4" class="numbers" type="text" id="4">4</button>
                      <button value="5" class="numbers" type="text" id="5">5</button>
                      <button value="6" class="numbers" type="text" id="6">6</button>
                  </div>
                  <div class="columns">
                      <button value="1" class="numbers" type="text" id="1">1</button>
                      <button value="2" class="numbers" type="text" id="2">2</button>
                      <button value="3" class="numbers" type="text" id="3">3</button>
                  </div>
                  <div class="columns">
                      <button value="0" class="numbers" type="text" id="0">0</button>
                      <button value="." class="numbers" id="point">.</button>
                      <button value="=" class="numbers" id="equal">=</button>
                  </div>                  
              </Left>
              <div class="right">
                <button value="c" class="columns2" id="clear">C</button>
                <button value="/" class="columns2" id="division">/</button>
                <button value="x" class="columns2" id="multiplication">x</button>
                <button value="-" class="columns2" id="subtraction">-</button>
                <button value="+" class="columns2" id="addition">+</button>
            </div>
            </Body>        
    </Container>
  );
}
