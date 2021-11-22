import styled from "styled-components";
import { colors } from "../../../variables";

export const StyledMacrosRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & span {
    margin-right: 5px;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${colors.burgundy};
    letter-spacing: 1px;
  }
`;
