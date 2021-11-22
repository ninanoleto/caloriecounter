import styled from "styled-components";
import { fonts } from "../../../../variables";

export const AuthInputWrapper = styled.div`
  padding-bottom: 8px;
`;

export const StyledAuthLabel = styled.label``;

export const Label = styled.div`
  font-size: 0.8rem;
  margin-bottom: 3px;
`;

export const StyledAuthInput = styled.input`
  position: relative;
  width: 90%;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  border: none;

  &:focus {
    outline: none;
  }
`;
