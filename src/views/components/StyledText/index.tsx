import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface IStyledTextProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  color?: string;
  fontWeight?: number;
  fontSize: number;
  align?: string;
  transform?: string;
  lineHeight?: number;
}

const Text = styled.p<IStyledTextProps>`
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  color: ${({ color, theme }) => color || theme.colors.black_900};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  text-align: ${({ align }) => align || "center"};
  text-transform: ${({ transform }) => transform};
  line-height: ${({ lineHeight }) => `${lineHeight}rem`};
  letter-spacing: 0.8px;
`;

export const StyledText: React.FC<IStyledTextProps> = ({
  text,
  color,
  fontWeight,
  fontSize,
  transform,
  ...rest
}) => {
  return (
    <Text
      color={color}
      transform={transform}
      fontWeight={fontWeight}
      fontSize={fontSize}
      {...rest}
    >
      {text}
    </Text>
  );
};
