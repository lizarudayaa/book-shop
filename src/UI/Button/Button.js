import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  font-size: 15px;
  width:150px;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 20px;
  margin: 5px;
  color: white;
  border: none;
  background : ${props => props.color}

`

const Button = ({color, text, onClick}) => {
    return (
        <ButtonStyled color={color} onClick={onClick}>{text}</ButtonStyled>
    );
}

export default Button;
