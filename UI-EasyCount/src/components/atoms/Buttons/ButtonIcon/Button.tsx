import { MarginProps, PaddingProps } from "../../../shared/types.shared";
import Icon from "../../Icons/Icon";
import { IconColor, IconImg, IconVariant } from "../../Icons/Icon.types";
import { StyledButton } from "./Button.styles";
import { ButtonColor, ButtonSize, ButtonVariant } from "./Button.types";

const colorIdx: Record<ButtonColor, IconColor> = {
  [ButtonColor.DarkGreen]: IconColor.DarkGreen,
  [ButtonColor.DarkerGreen]: IconColor.DarkerGreen,
  [ButtonColor.DarkRed]: IconColor.DarkRed,
  [ButtonColor.Burgundy]: IconColor.Burgundy,
};

const variantIdx: Record<ButtonVariant, IconImg> = {
  [ButtonVariant.Add]: IconImg.Add,
  [ButtonVariant.AddMeal]: IconImg.Add,
  [ButtonVariant.Delete]: IconImg.Remove,
  [ButtonVariant.AddChecked]: IconImg.AddChecked,
};

interface ButtonProps {
  children: string;
  color: ButtonColor;
  variant: ButtonVariant;
  size?: ButtonSize;
  margin?: MarginProps;
  padding?: PaddingProps;
  onClick?: () => void;
  type?: string;
}

const Button = (props: ButtonProps) => {
  const { children, color, variant, size, margin, padding, onClick, type } =
    props;

  const handleClick = () => {
    onClick !== undefined && onClick();
  };

  return (
    <StyledButton
      type={type ? "submit" : "button"}
      color={color}
      variant={variant}
      size={size || ButtonSize.Small}
      margin={margin || {}}
      padding={padding || {}}
      onClick={handleClick}
    >
      {variant === ButtonVariant.Delete && <span>{children}</span>}
      <Icon
        img={variantIdx[variant]}
        color={colorIdx[color]}
        variant={IconVariant.NoHover}
        margin={{ marginX: 3 }}
      />
      {(variant === ButtonVariant.AddChecked ||
        variant === ButtonVariant.Add ||
        variant === ButtonVariant.AddMeal) && <span>{children}</span>}
    </StyledButton>
  );
};

export default Button;
