import styled from "styled-components";
import { colors, fonts } from "../../../variables";
import { AuthFormType } from "../../atoms/Inputs/AuthInput/AuthInput.types";

interface AuthFormProps {
  formType: AuthFormType;
}

const getMargin = (props: AuthFormProps) =>
  (props.formType === AuthFormType.Login && `margin: 15% 10%;`) ||
  (props.formType === AuthFormType.SignUp && `margin: 10%;`);

export const AuthWrapper = styled.div<AuthFormProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${getMargin}
`;

export const StyledFormWrapper = styled.div`
  width: 30%;
  padding: 50px;
  background-color: ${colors.lightYellow};
  border-radius: 5px;
`;

export const Title = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-family: ${fonts.adventPro};
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.3rem;
  margin: 0;
  margin-bottom: 2rem;
`;

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  font-size: 0.8rem;
`;
