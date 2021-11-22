import styled from "styled-components";
import { colors, fonts } from "../../../../variables";
import {
  calcMargin,
  calcPadding,
  MarginProps,
  PaddingProps,
} from "../../../shared/types.shared";
import { ButtonColor, ButtonSize, ButtonVariant } from "./Button.types";

const buttonColorIdx: Record<ButtonColor, string> = {
  [ButtonColor.DarkGreen]: colors.darkGreen,
  [ButtonColor.DarkerGreen]: colors.darkerGreen,
  [ButtonColor.DarkRed]: colors.darkRed,
  [ButtonColor.Burgundy]: colors.burgundy,
};

interface StyledButtonProps {
  color: ButtonColor;
  variant: ButtonVariant;
  margin: MarginProps;
  padding: PaddingProps;
  size: ButtonSize;
}

const getButtonColor = (props: StyledButtonProps) =>
  buttonColorIdx[props.color];

const getButtonSize = (props: StyledButtonProps) =>
  props.size === ButtonSize.Small
    ? "0.8rem"
    : props.size === ButtonSize.Medium
    ? "0.9rem"
    : "1.1rem";

const getTextTransform = (props: StyledButtonProps) =>
  // ((props.variant === ButtonVariant.Add ||
  //   props.variant === ButtonVariant.Delete) &&
  //   "capitalize") ||
  props.variant === ButtonVariant.AddChecked && "lowercase";

const getFontStyle = (props: StyledButtonProps) =>
  (props.variant === ButtonVariant.AddChecked &&
    `font-family: ${fonts.adventPro};
  font-weight: 500;`) ||
  (props.variant === ButtonVariant.AddMeal && `font-weight: 600;`);

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${getButtonColor};
  ${getFontStyle};
  font-size: ${getButtonSize};
  text-transform: ${getTextTransform};

  cursor: pointer;
  border: none;
  background-color: transparent;

  ${({ margin }) => calcMargin(margin)}
  ${({ padding }) => calcPadding(padding)}

  &:focus {
    outline: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;
