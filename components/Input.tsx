import styled from 'styled-components/native';
import {TextInput, TextInputProps} from 'react-native';

const Input = styled(TextInput)<TextInputProps>`
  background-color: ${props =>
    props.theme.isDark ? props.theme.light : props.theme.dark};
  min-height: 24px;
  color: ${props =>
    props.theme.isDark ? props.theme.dark : props.theme.light};
`;

export default Input;
