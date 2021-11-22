import { NavLink } from "../../atoms/Links/NavLink";
import { LinkColor, LinkRef } from "../../atoms/Links/Link.types";
import { StyledNavbar, NavLinkWrapper, NavbarWrapper } from "./Navbar.styles";

interface NavbarProps {
  login?: boolean;
  signup?: boolean;
  firstPage?: boolean;
}

const Navbar = (props: NavbarProps) => {
  const { login, signup } = props;

  return (
    <StyledNavbar>
      <NavbarWrapper>
        <NavLink
          // to={"/"}
          to={"#"}
          variant={LinkRef.Logo}
          color={LinkColor.DarkPink}
          // hover={LinkColor.LightPink}
        >
          Easy Count
        </NavLink>
        {/* {login || signup ? (
          <NavLinkWrapper>
            <NavLink
              to={"/login"}
              variant={LinkRef.NavLink}
              color={login ? LinkColor.LightPink : LinkColor.DarkPink}
              hover={login ? "" : LinkColor.LightPink}
            >
              Login
            </NavLink>
            <NavLink
              to={"/signup"}
              variant={LinkRef.NavLink}
              color={login ? LinkColor.DarkPink : LinkColor.LightPink}
              hover={login ? LinkColor.LightPink : ""}
              margin={{ marginLeft: 30 }}
            >
              Sign Up
            </NavLink>
          </NavLinkWrapper>
        ) : (
          <NavLinkWrapper>
            <NavLink
              to={"/"}
              variant={LinkRef.NavLink}
              color={LinkColor.LightPink}
            >
              Welcome, Username
            </NavLink>
            <NavLink
              to={"/"}
              variant={LinkRef.NavLink}
              color={LinkColor.DarkPink}
              hover={LinkColor.LightPink}
              margin={{ marginLeft: 30 }}
            >
              Log Out
            </NavLink>
          </NavLinkWrapper>
        )} */}
      </NavbarWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
