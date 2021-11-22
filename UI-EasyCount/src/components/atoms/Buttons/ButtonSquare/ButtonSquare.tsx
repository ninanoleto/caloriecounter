import { MarginProps, PaddingProps } from "../../../shared/types.shared";
import {
  StyledButtonSquare,
  StyledButtonSquareWrapper,
} from "./ButtonSquare.styles";
import { ButtonSquareColor } from "./ButtonSquare.types";

interface ButtonSquareProps {
  children: string;
  type?: string;
  color?: ButtonSquareColor;
  margin?: MarginProps;
  padding?: PaddingProps;
  onClick?: () => void;
  flexEnd?: boolean;
}

const ButtonSquare = (props: ButtonSquareProps) => {
  const { children, type, color, margin, padding, onClick, flexEnd } = props;

  const handleClick = () => {
    onClick !== undefined && onClick();
  };

  return (
    <StyledButtonSquareWrapper position={flexEnd || false}>
      <StyledButtonSquare
        color={color || ButtonSquareColor.Peach}
        type={type ? "submit" : "button"}
        margin={margin || {}}
        padding={padding || {}}
        onClick={handleClick}
      >
        {children}
      </StyledButtonSquare>
    </StyledButtonSquareWrapper>
  );
};

export default ButtonSquare;
