import { LinkProps } from "./Link";
import { StyledNavLink } from "./Link.styles";

export const NavLink = (props: LinkProps) => {
  const { children, to, variant, color, hover, margin, padding } = props;

  return (
    <StyledNavLink
      to={to || ""}
      variant={variant || {}}
      color={color}
      hover={hover || ""}
      margin={margin || {}}
      padding={padding || {}}
    >
      {children}
    </StyledNavLink>
  );
};
