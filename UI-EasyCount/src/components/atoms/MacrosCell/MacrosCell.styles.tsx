import styled from "styled-components";
import { colors } from "../../../variables";
import { calcMargin, MarginProps } from "../../shared/types.shared";
import { CellColor, CellVariant } from "./MacrosCell.types";

const macrosCellIdx: Record<CellColor, string> = {
  [CellColor.LightPink]: colors.lightPink,
  [CellColor.White]: colors.brightWhite,
  [CellColor.Burgundy]: colors.burgundy,
};

interface StyledMacrosCellProps {
  color: CellColor;
  margin: MarginProps;
  variant: CellVariant | "";
  children: number | string;
}

const getCellColor = (props: StyledMacrosCellProps) =>
  macrosCellIdx[props.color];

const getTextColor = (props: StyledMacrosCellProps) =>
  (props.variant === CellVariant.Remaining &&
    ((props.children > 0 && colors.darkGreen) ||
      (props.children < 0 && colors.darkRed))) ||
  (props.variant === CellVariant.MealMacros && colors.brightWhite) ||
  (props.variant === CellVariant.DailyGoals && colors.burgundy);

const getFontWeight = (props: StyledMacrosCellProps) =>
  props.variant === CellVariant.DailyGoals
    ? "600"
    : props.variant === CellVariant.Remaining ||
      props.variant === CellVariant.MealMacros
    ? "700"
    : "400";

const getWidth = (props: StyledMacrosCellProps) =>
  props.variant === CellVariant.Current ||
  props.variant === CellVariant.DailyGoals ||
  props.variant === CellVariant.Remaining
    ? "4rem"
    : props.variant === CellVariant.FoodName
    ? "20rem"
    : "4.4rem";

const getTextAlign = (props: StyledMacrosCellProps) =>
  props.variant === CellVariant.FoodName ? "left" : "center";

const getPadding = (props: StyledMacrosCellProps) =>
  props.variant === CellVariant.FoodName ? "15px" : "0";

export const StyledMacrosCell = styled.div<StyledMacrosCellProps>`
  background-color: ${getCellColor};
  color: ${getTextColor};

  font-size: 0.75rem;
  font-weight: ${getFontWeight};
  text-align: ${getTextAlign};

  width: ${getWidth};
  padding: 4px 0;
  padding-left: ${getPadding};

  ${({ margin }) => calcMargin(margin)}
`;
