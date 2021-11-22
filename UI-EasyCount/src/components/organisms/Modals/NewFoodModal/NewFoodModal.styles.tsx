import styled from "styled-components";
import { colors, fonts } from "../../../../variables";

interface StyledModalProps {
  isOpen: boolean;
}

const getDisplay = (props: StyledModalProps) =>
  !props.isOpen && "display: none;";

export const StyledModalBg = styled.div<StyledModalProps>`
  background-color: #000000af;

  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;

  z-index: 10;

  ${getDisplay}
`;

export const StyledNewFoodModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 800px;
  padding: 30px 0;
  background-color: ${colors.greenBg};
  border-radius: 10px;
`;

export const StyledNewFoodModalForm = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const IconWrapper = styled.div`
  align-self: flex-end;
  position: relative;
  top: -10px;
  left: -15px;

  z-index: 10;
`;

export const Title = styled.h2`
  color: ${colors.teal};
  font-family: ${fonts.adventPro};
  font-size: 1.9rem;
  font-weight: 500;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const Subtitle = styled.p`
  margin-bottom: 3rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
