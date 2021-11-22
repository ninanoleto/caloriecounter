import styled from "styled-components";
import { colors } from "../../../../variables";
import { EditFormVariant } from "./InlineEditForm.types";

interface EditInputProps {
  variant: EditFormVariant;
}

export const StyledInlineEditForm = styled.form`
  display: flex;
`;

const getStyles = (props: EditInputProps) =>
  (props.variant === EditFormVariant.Qty &&
    `width: 4.4rem;
  padding: 0;
  text-align: center;`) ||
  (props.variant === EditFormVariant.Meal &&
    `width: 15rem;
  padding: 4px 10px;
  text-align: left;
  font-size: 1rem;`);

export const InlineEditInput = styled.input<EditInputProps>`
  background-color: ${colors.yellow};
  color: ${colors.darkerBurgundy};

  ${getStyles};
  border: none;
  margin: 1px 1.7px;

  &:focus {
    outline: none;
  }

  &::selection {
    background-color: ${colors.selectYellow};
  }
`;
