import styled from "styled-components";
import { colors, fonts } from "../../../variables";

export const Title = styled.h1`
  font-family: ${fonts.adventPro};
  color: ${colors.darkBurgundy};
  font-size: 4rem;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-family: ${fonts.adventPro};
  color: ${colors.burgundy};
  font-weight: 400;
  font-size: 2rem;
  margin-top: 0.5rem;
`;

export const ImgListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding-top: 20px;
`;

export const StyledImg = styled.img`
  height: 50px;
  padding: 10px 0;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    text-transform: uppercase;
    color: ${colors.black};
    font-size: 0.85rem;
    font-weight: 400;
    padding-left: 20px;
  }
`;
