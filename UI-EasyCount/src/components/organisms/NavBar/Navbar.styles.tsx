import styled from "styled-components";
import { fonts } from "../../../variables";

export const StyledNavbar = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  height: 4rem;
  width: 100%;

  background-color: black;
  font-family: ${fonts.adventPro};
  font-weight: 600;

  display: flex;
  align-items: center;
`;

export const NavbarWrapper = styled.div`
  /* margin: 0 10%; for bigger screens */
  margin: 0 5%;
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
