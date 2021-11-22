import styled from "styled-components";
import { colors } from "../../../../variables";

export const StyledInputWrapper = styled.div`
  margin: 10px 40px;

  display: flex;
  align-content: center;
  justify-content: space-between;
`;

export const StyledLabel = styled.label`
  width: 40%;
  padding: 5px;
  background-color: ${colors.brightWhite};
  font-size: 0.8rem;
`;

export const StyledInputBox = styled.input`
  border: 1px dashed ${colors.teal};
  outline: none;
  width: 15%;
  text-align: center;
  padding: 5px;
  background-color: ${colors.brightWhite};
`;

export const IconWrapper = styled.div`
  width: 15%;
  display: flex;
  align-content: center;
  justify-content: space-around;
`;

export const StyledInputCheckbox = styled.input`
  width: 15%;
  margin: auto 0;
  cursor: pointer;
  outline: none;
`;
