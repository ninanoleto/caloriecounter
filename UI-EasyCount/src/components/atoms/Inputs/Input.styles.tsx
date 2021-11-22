import styled from "styled-components";
import { colors, fonts } from "../../../variables";
import { InputType } from "./Input.types";

interface StyledLabelProps {
  label: InputType;
}

export const StyledInputWrapper = styled.div`
  margin-bottom: 15px;

  display: flex;
  justify-content: space-between;
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  /* font-size: 0.9rem; */
  align-self: center;
  color: ${colors.black};
  font-family: ${fonts.adventPro};

  ${(props) =>
    props.label === InputType.NewFoodName ||
    props.label === InputType.FoodPortion ||
    props.label === InputType.KcalPerPortion ||
    props.label === InputType.CarbsPerPortion ||
    props.label === InputType.FatPerPortion ||
    props.label === InputType.ProteinPerPortion
      ? `
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.teal};`
      : `
    font-size: 1.2rem;
    color: ${colors.burgundy};
  `}
`;

export const StyledInput = styled.input`
  width: 50%;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;
