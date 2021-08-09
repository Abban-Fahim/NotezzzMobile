import {Text as RawText, TextProps} from 'react-native';
import styled from 'styled-components';

interface StyledText extends TextProps {
  fontSize: string;
}

const StyledText = styled(RawText)<StyledText>`
  font-size: ${props => (props.fontSize ? props.fontSize : '18px')};
  font-family: 'Ubuntu-Regular';
  color: ${props =>
    props.theme.isDark ? props.theme.darkText : props.theme.lightText};
`;

export default StyledText;
