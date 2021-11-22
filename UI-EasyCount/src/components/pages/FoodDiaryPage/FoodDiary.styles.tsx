import styled from "styled-components";
import { colors, fonts } from "../../../variables";

export const Loading = styled.div`
  padding-top: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFoodDiary = styled.div`
  position: relative;
  padding-bottom: 4rem;
  margin-top: 4rem;
`;

export const ContentWrapper = styled.div`
  min-height: 28rem;
  width: 70vw;
  margin: 0 auto;

  background-color: ${colors.lightYellow};
  border-radius: 15px;
  padding: 2rem 3.5rem;
`;

export const StyledButtonWrapper = styled.div`
  margin-left: 5px;
`;

export const Title = styled.h1`
  color: ${colors.burgundy};
  font-family: ${fonts.adventPro};
  font-weight: 400;
  font-size: 3rem;

  margin: 0 0 10px;
`;

export const StyledDropdownPreset = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

export const StyledSelect = styled.select`
  width: 150px;
  margin-left: 10px;
  padding: 5px 35px 5px 5px;

  font-family: ${fonts.adventPro};
  color: ${colors.darkBurgundy};
  font-weight: 500;
  font-size: 1.01rem;

  border: none;
  outline: none;
`;
