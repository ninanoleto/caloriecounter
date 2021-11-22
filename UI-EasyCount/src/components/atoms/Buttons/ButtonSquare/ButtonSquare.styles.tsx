import styled from "styled-components";
import { colors, fonts } from "../../../../variables";
import {
  calcMargin,
  calcPadding,
  MarginProps,
  PaddingProps,
} from "../../../shared/types.shared";
import { ButtonSquareColor } from "./ButtonSquare.types";

interface ButtonSquareWrapperProps {
  position: boolean;
}

interface ButtonSquareProps {
  color: ButtonSquareColor;
  margin: MarginProps;
  padding: PaddingProps;
}

const getPosition = (props: ButtonSquareWrapperProps) =>
  props.position ? "flex-end" : "center";

const getBgColor = (props: ButtonSquareProps) =>
  (props.color === ButtonSquareColor.Peach && colors.yellow) ||
  (props.color === ButtonSquareColor.Green && colors.brightGreen) ||
  (props.color === ButtonSquareColor.Red && colors.darkRed);

const getColor = (props: ButtonSquareProps) =>
  (props.color === ButtonSquareColor.Peach && colors.darkBurgundy) ||
  (props.color === ButtonSquareColor.Green && colors.darkerGreen) ||
  (props.color === ButtonSquareColor.Red && colors.white);

const getBgColorHover = (props: ButtonSquareProps) =>
  (props.color === ButtonSquareColor.Peach && colors.burgundy) ||
  (props.color === ButtonSquareColor.Green && colors.darkGreen) ||
  (props.color === ButtonSquareColor.Red && colors.red);

const getColorHover = (props: ButtonSquareProps) =>
  (props.color === ButtonSquareColor.Peach && colors.white) ||
  (props.color === ButtonSquareColor.Green && colors.white) ||
  (props.color === ButtonSquareColor.Red && colors.white);

export const StyledButtonSquareWrapper = styled.div<ButtonSquareWrapperProps>`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: ${getPosition};
`;

export const StyledButtonSquare = styled.button<ButtonSquareProps>`
  border: none;
  cursor: pointer;
  transition: 0.2s;

  font-size: 1.1rem;
  font-weight: 700;

  height: 40px;
  width: 160px;

  font-family: ${fonts.adventPro};
  background-color: ${getBgColor};
  color: ${getColor};

  &:focus {
    outline-color: ${getBgColorHover};
    border-radius: -3px;
  }

  &:hover {
    background-color: ${getBgColorHover};
    color: ${getColorHover};
  }

  ${({ margin }) => calcMargin(margin)}
  ${({ padding }) => calcPadding(padding)}
`;
