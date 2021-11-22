import styled from "styled-components";
import { colors, fonts } from "../../../variables";
import { TitleColor } from "./AddCheckedForm.types";

const titleColorIdx: Record<TitleColor, string> = {
  [TitleColor.Teal]: colors.teal,
  [TitleColor.Burgundy]: colors.burgundy,
};

interface TitleProps {
  width?: string;
  color?: TitleColor;
}

export const StyledAddCheckedForm = styled.form``;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0.5rem 2.5rem;
`;

export const Title = styled.p<TitleProps>`
  margin: 0;
  font-family: ${fonts.adventPro};
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) =>
    (props.color && titleColorIdx[props.color]) || colors.black};

  width: ${(props) => props.width};

  &:not(:first-of-type) {
    text-align: center;
  }
`;

export const StyledBody = styled.div`
  background-color: ${colors.greenBg};
  width: 100%;
  height: 310px;
  margin-bottom: 10px;

  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
`;

export const NoFoodTitle = styled.h2`
  font-family: ${fonts.adventPro};
  font-weight: 400;
  font-size: 2rem;
  color: ${colors.darkGreen};
  text-align: center;

  margin-top: 100px;
`;
