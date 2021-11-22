import styled from "styled-components";
import { fonts } from "../../../../variables";
import { calcMargin, MarginProps } from "../../../shared/types.shared";

interface StyledButtonBackProps {
  margin: MarginProps;
}

export const StyledButtonBack = styled.button<StyledButtonBackProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ margin }) => calcMargin(margin)}

  background-color: transparent;
  border: none;
  cursor: pointer;

  & span {
    font-family: ${fonts.adventPro};
    font-size: 1.1rem;
    text-transform: capitalize;
  }
`;
