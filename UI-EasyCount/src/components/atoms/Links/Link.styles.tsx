import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, fonts } from "../../../variables";
import { LinkColor, LinkRef } from "./Link.types";
import {
  calcMargin,
  calcPadding,
  MarginProps,
  PaddingProps,
} from "../../shared/types.shared";

const linkColorIdx: Record<LinkColor, string> = {
  [LinkColor.DarkPink]: colors.darkPink,
  [LinkColor.LightPink]: colors.lightPink,
  [LinkColor.Burgundy]: colors.burgundy,
};

type StyledLinkProps = {
  variant: LinkRef;
  color: LinkColor;
  hover: LinkColor | "";
  margin: MarginProps;
  padding: PaddingProps;
};

const getLinkColor = (props: StyledLinkProps) => linkColorIdx[props.color];

const getLinkHoverColor = (props: StyledLinkProps) =>
  props.hover === "" ? props.hover : linkColorIdx[props.hover];

const getRefStyle = (props: StyledLinkProps) =>
  props.variant === LinkRef.Logo &&
  `font-size: 1.5rem;
   text-transform: uppercase;`;

export const StyledNavLink = styled(NavLink)<StyledLinkProps>`
  text-decoration: none;
  color: ${getLinkColor};

  ${({ margin }) => calcMargin(margin)}

  ${getRefStyle}

  &:hover {
    color: ${getLinkHoverColor};
  }
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${getLinkColor};
  text-decoration: none;
  font-weight: 500;

  ${({ padding }) => calcPadding(padding)}

  &:hover {
    text-decoration: underline;
  }
`;
