import styled from "styled-components";
import { colors, fonts } from "../../../variables";

export const StyledAddFood = styled.div`
  position: relative;
  /* top: -4rem; */
  padding-bottom: 4rem;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${fonts.adventPro};
  font-weight: 400;
  font-size: 2.5rem;
  color: ${colors.burgundy};
  margin: 2.5rem auto 1.5rem;
  padding-top: 3rem;

  & span {
    margin-left: 0.5rem;
    font-weight: 500;
  }
`;

export const BoxWrapper = styled.div`
  min-height: 28rem;
  width: 70vw;
  margin: 0 auto;

  background-color: ${colors.lightYellow};
  border-radius: 15px;
  padding: 2rem 3.5rem;
`;

export const ContentWrapper = styled.div`
  padding: 1rem 6rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
