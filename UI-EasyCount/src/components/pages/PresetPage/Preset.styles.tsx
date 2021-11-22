import styled from "styled-components";
import { colors, fonts } from "../../../variables";

export const StyledDailyGoals = styled.div`
  position: relative;
  top: 4rem;
  padding-bottom: 4rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DailyGoalsTitle = styled.h1`
  color: ${colors.darkBurgundy};
  font-family: ${fonts.adventPro};
  font-weight: 400;
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0;
  letter-spacing: 1px;

  width: 40%;
`;

export const FormWrapper = styled.div`
  background-color: ${colors.lightYellow};
  border-radius: 5px;
  padding: 50px;
  width: 50%;
`;

export const DailyGoalsForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: ${colors.darkBurgundy};
  font-family: ${fonts.adventPro};
  text-align: center;
  font-weight: 400;
  font-size: 2rem;
  margin: 0 0 30px;
`;

export const InputWrapper = styled.div`
  width: 80%; ;
`;

export const ButtonWrapper = styled.div`
  width: 60%;
`;
