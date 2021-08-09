import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import Text from "./Text";

interface myButtonProps extends TouchableOpacityProps {
  color?: "primary" | "secondary" | "transparent" | undefined;
  type: "filled" | "outlined" | "icon";
  fontSize?: string;
  children;
}

function returnThemeColor(props) {
  if (props.color) {
    return props.theme[props.color];
  } else {
    return props.theme.primary;
  }
}

const FilledButton = styled(TouchableOpacity)<myButtonProps>`
  border-radius: 6px;
  padding: 15px;
  background-color: ${returnThemeColor};
  align-self: flex-start;
`;

const OutlinedButton = styled(FilledButton)`
  background-color: transparent;
  border: 2px solid ${returnThemeColor};
`;

const FloatingActionBtn = styled(FilledButton)`
  border-radius: 50px;
`;

const Button: React.FC<myButtonProps> = (props: myButtonProps) => {
  if (props.type === "filled") {
    return (
      <FilledButton {...props} color={props.color}>
        {/* {props.icon?<Icon></Icon>} */}
        <Text fontSize={props.fontSize}>{props.children}</Text>
      </FilledButton>
    );
  } else if (props.type === "outlined") {
    return (
      <OutlinedButton {...props} color={props.color}>
        <Text fontSize={props.fontSize}>{props.children}</Text>
      </OutlinedButton>
    );
  } else if (props.type === "icon") {
    return (
      <FloatingActionBtn {...props} color={props.color}>
        {props.children}
      </FloatingActionBtn>
    );
  }
};

export default Button;
