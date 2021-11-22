import styled from "styled-components";
import { colors } from "../../../variables";
import { calcMargin, MarginProps } from "../../shared/types.shared";
import { MacroCircleName } from "./MacroCircle.types";

interface CircleElementProps {
  margin: MarginProps;
  isTeal: boolean;
}

const getBgColor = (props: CircleElementProps) =>
  (props.isTeal && colors.teal) || colors.burgundy;

const getSpanColor = (props: CircleElementProps) =>
  (props.isTeal && colors.brightGreen) || colors.lightPink;

export const CircleElementWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleElement = styled.div<CircleElementProps>`
  background-color: ${getBgColor};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  font-size: 0.7rem;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  text-align: center;
  color: white;
  font-weight: 700;

  ${({ margin }) => calcMargin(margin)}

  & span {
    color: ${getSpanColor};
  }
`;
