import styled from "styled-components";
import { colors, fonts } from "../../../../variables";

interface StyledWrapperProps {
  isOpen: boolean;
}

const getDisplay = (props: StyledWrapperProps) =>
  !props.isOpen && "display: none;";

export const StyledEditPresetFormBg = styled.div<StyledWrapperProps>`
  background-color: #000000af;

  width: 100vw;
  height: 100%;
  /* padding-bottom: 4rem; */
  position: absolute;
  top: 0;

  z-index: 10;

  ${getDisplay}
`;

export const StyledEditPresetFormWrapper = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  padding: 30px 0;
  background-color: ${colors.lightYellow};

  border-radius: 10px;
`;

export const IconWrapper = styled.div`
  align-self: flex-end;

  position: relative;
  top: -10px;
  left: -15px;

  z-index: 10;
`;

export const StyledEditPresetModalForm = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const Title = styled.h2`
  color: ${colors.burgundy};
  font-family: ${fonts.adventPro};
  font-size: 1.9rem;
  font-weight: 500;
  margin: 0 auto;
  margin-bottom: 3rem;

  letter-spacing: 0.1rem;

  & span {
    /* font-size: 2rem; */
    text-transform: uppercase;
    color: ${colors.darkerBurgundy};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
