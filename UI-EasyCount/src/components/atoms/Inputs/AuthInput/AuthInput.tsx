import {
  AuthInputWrapper,
  Label,
  StyledAuthInput,
  StyledAuthLabel,
} from "./AuthInput.styles";
import { AuthInputType } from "./AuthInput.types";

interface AuthInputProps {
  label: AuthInputType;
  name?: string;
  inputValue: string;
  onChange: React.ChangeEventHandler;
}

const AuthInput = (props: AuthInputProps) => {
  const { label, name, inputValue, onChange } = props;
  return (
    <AuthInputWrapper>
      <StyledAuthLabel>
        <Label>{label}</Label>
        <StyledAuthInput
          required
          id={label}
          name={name || ""}
          type="text"
          value={inputValue}
          onChange={onChange}
        />
      </StyledAuthLabel>
    </AuthInputWrapper>
  );
};

export default AuthInput;
