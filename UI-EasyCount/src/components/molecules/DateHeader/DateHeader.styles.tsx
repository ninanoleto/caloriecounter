import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts } from "../../../variables";

interface HeaderButtonProps {
  prev?: boolean;
  next?: boolean;
}

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 6rem;
  font-family: ${fonts.adventPro};
  font-weight: 600;
  font-size: 1rem;
`;

export const HeaderText = styled.h3`
  background-color: ${colors.burgundy};
  color: white;
  margin: auto 0.4rem 1rem;
  width: 18rem;
  height: 2.3rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButton = styled.button`
  background-color: ${colors.burgundy};
  border: none;
  cursor: pointer;
  margin: auto 0 1rem;
  width: 2.5rem;
  height: 2.3rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${(props: HeaderButtonProps) =>
    (props.prev && "5px 0 0 5px") || (props.next && "0 5px 5px 0")};

  & svg {
    transition: all 0.2s;
  }

  &:hover svg {
    transform: scale(1.4);
  }
`;
