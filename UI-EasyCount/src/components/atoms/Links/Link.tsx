import { MarginProps, PaddingProps } from "../../shared/types.shared";
import { StyledLink } from "./Link.styles";
import { LinkColor, LinkRef } from "./Link.types";

export interface LinkProps {
  children: string;
  to?: string;
  variant: LinkRef;
  color: LinkColor;
  hover?: LinkColor | "";
  margin?: MarginProps;
  padding?: PaddingProps;
}

const Link = (props: LinkProps) => {
  const { children, to, variant, color, hover, margin, padding } = props;

  return (
    <StyledLink
      to={to || ""}
      variant={variant || {}}
      color={color}
      hover={hover || ""}
      margin={margin || {}}
      padding={padding || {}}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
