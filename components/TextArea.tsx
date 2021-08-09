import React from 'react';
import TextInput from './Input';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

const Input = styled(TextInput)`
  padding: 3px;
`;

const TextArea: React.FC<TextInputProps> = props => {
  return (
    <Input
      editable
      {...props}
      multiline={true}
      numberOfLines={4}
      value={props.value}
      textAlignVertical="top"
      onChangeText={props.onChangeText}
    />
  );
};

export default TextArea;
