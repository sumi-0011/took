import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps {
  title: string;
  color?: string;
}

function ButtonComponent({title, color}: ButtonProps) {
  return <Button title={title} color={color ?? '#68DE7B'} />;
}

export default ButtonComponent;
