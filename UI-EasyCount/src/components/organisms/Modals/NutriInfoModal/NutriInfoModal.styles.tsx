import styled from "styled-components";
import { colors, fonts } from "../../../../variables";

interface NutriInfoProps {
  isOpen: boolean;
}

const getDisplay = (props: NutriInfoProps) => !props.isOpen && "display: none;";

export const StyledNutriInfoWrapper = styled.div<NutriInfoProps>`
  background-color: #000000af;

  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;

  z-index: 10;

  ${getDisplay}
`;

export const StyledNutriInfo = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 500px;
  width: 500px;
  background-color: ${colors.greenBg};

  border-radius: 50%;
`;

export const IconWrapper = styled.div`
  position: relative;
  padding-top: 20px;
  z-index: 10;
`;

export const Title = styled.h4`
  color: ${colors.teal};
  font-family: ${fonts.adventPro};
  font-size: 1.5rem;
  margin: 3rem 0 0;
`;

export const Subtitle = styled.p`
  margin-bottom: 3rem;
`;

export const NutriValuesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const NutriValue = styled.div`
  height: 30px;
  width: 60px;
  margin: 0 7px;
  background-color: ${colors.brightWhite};
  text-align: center;
  font-size: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
