import styled from "styled-components";
import { colors } from "../../../variables";
import { IconVariant } from "./Icon.types";
import { MarginProps, calcMargin } from "../../shared/types.shared";
import { IconColor } from "./Icon.types";

const iconColorIdx: Record<IconColor, string> = {
  [IconColor.Black]: colors.black,
  [IconColor.White]: colors.white,
  [IconColor.DarkPink]: colors.darkPink,
  [IconColor.LightPink]: colors.lightPink,
  [IconColor.BrightPrink]: colors.brightPrink,
  [IconColor.DarkGreen]: colors.darkGreen,
  [IconColor.DarkerGreen]: colors.darkerGreen,
  [IconColor.Green]: colors.green,
  [IconColor.DarkRed]: colors.darkRed,
  [IconColor.Burgundy]: colors.burgundy,
  [IconColor.Teal]: colors.teal,
};

interface StyledIconProps {
  color: IconColor;
  variant: IconVariant;
  margin: MarginProps;
}

const getIconColor = (props: StyledIconProps) =>
  props.variant === IconVariant.NoHover
    ? iconColorIdx[props.color]
    : colors.black;

const getIconHoverColor = (props: StyledIconProps) =>
  props.variant === IconVariant.NoHover ? "none" : iconColorIdx[props.color];

export const StyledIcon = styled.button<StyledIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s;
  ${({ margin }) => calcMargin(margin)}

  svg {
    color: ${getIconColor};
    font-size: 1.2rem;
  }

  &:hover svg {
    color: ${getIconHoverColor};
  }
`;

export const StyledIconEye = styled.div<StyledIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s;
  ${({ margin }) => calcMargin(margin)}

  svg {
    color: ${getIconColor};
    font-size: 1.2rem;
  }

  &:hover svg {
    color: ${getIconHoverColor};
  }
`;
