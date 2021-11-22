import { RouteComponentProps } from "react-router-dom";
import { useManyInputState } from "../../../hooks/useInputState";
import ButtonSquare from "../../atoms/Buttons/ButtonSquare/ButtonSquare";
import AuthInput from "../../atoms/Inputs/AuthInput/AuthInput";
import {
  AuthFormType,
  AuthInputType,
} from "../../atoms/Inputs/AuthInput/AuthInput.types";
import Link from "../../atoms/Links/Link";
import { LinkColor, LinkRef } from "../../atoms/Links/Link.types";
import AuthHero from "../../organisms/AuthHero/AuthHero";
import {
  AuthWrapper,
  StyledFooter,
  StyledFormWrapper,
  Title,
} from "./Auth.styles";

interface SignUpProps extends RouteComponentProps {}

const SignUp = (props: SignUpProps) => {
  const signUpUser = (
    email: string,
    username: string,
    password: string,
    confirmPassword: string
  ) => {};

  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [inputValues, handleChanges, resetAll] =
    useManyInputState(initialValues);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    const email = initialValues.email;
    const username = initialValues.username;
    const password = initialValues.password;
    const confirmPassword = initialValues.confirmPassword;
    signUpUser(email, username, password, confirmPassword);

    resetAll();
    // redirect user to login page
  };

  return (
    <AuthWrapper formType={AuthFormType.SignUp}>
      <AuthHero />
      <StyledFormWrapper>
        <form onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          <div>
            <AuthInput
              label={AuthInputType.Email}
              name="email"
              inputValue={inputValues.email}
              onChange={handleChanges}
            />
            <AuthInput
              label={AuthInputType.Username}
              name="username"
              inputValue={inputValues.username}
              onChange={handleChanges}
            />
            <AuthInput
              label={AuthInputType.Password}
              name="password"
              inputValue={inputValues.password}
              onChange={handleChanges}
            />
            <AuthInput
              label={AuthInputType.ConfirmPassword}
              name="confirmPassword"
              inputValue={inputValues.confirmPassword}
              onChange={handleChanges}
            />
          </div>
          <ButtonSquare type="submit">Sign Up</ButtonSquare>
        </form>
        <StyledFooter>
          Don't have an account yet?
          <Link
            to="/signup"
            variant={LinkRef.Link}
            color={LinkColor.Burgundy}
            padding={{ paddingLeft: 5 }}
          >
            Sign Up
          </Link>
        </StyledFooter>
      </StyledFormWrapper>
    </AuthWrapper>
  );
};

export default SignUp;
