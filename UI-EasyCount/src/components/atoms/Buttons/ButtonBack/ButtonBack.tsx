import { MarginProps } from "../../../shared/types.shared";
import Icon from "../../Icons/Icon";
import { IconImg } from "../../Icons/Icon.types";
import { StyledButtonBack } from "./ButtonBack.styles";

interface ButtonBackProps {
  goBack: () => void;
  margin?: MarginProps;
}

const ButtonBack = (props: ButtonBackProps) => {
  const { goBack, margin } = props;

  return (
    <StyledButtonBack onClick={goBack} margin={margin || {}}>
      <Icon img={IconImg.Back} margin={{ marginRight: 5 }} />
      <span>Go back</span>
    </StyledButtonBack>
  );
};

export default ButtonBack;
