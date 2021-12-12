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

const Login = () => {
  const loginUser = (email: string, password: string) => {};

  const initialValues = {
    email: "",
    password: "",
  };

  const [inputValues, handleChanges, resetAll] =
    useManyInputState(initialValues);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    const email = initialValues.email;
    const password = initialValues.password;
    loginUser(email, password);

    resetAll();
    // redirect user to first page
  };

  return (
    <AuthWrapper formType={AuthFormType.Login}>
      <AuthHero />
      <StyledFormWrapper>
        <form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <div>
            <AuthInput
              label={AuthInputType.Email}
              name="email"
              inputValue={inputValues.email}
              onChange={handleChanges}
            />
            <AuthInput
              label={AuthInputType.Password}
              name="password"
              inputValue={inputValues.password}
              onChange={handleChanges}
            />
          </div>
          <ButtonSquare type="submit">Login</ButtonSquare>
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

export default Login;
