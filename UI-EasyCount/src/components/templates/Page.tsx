import React from "react";
import { StyledPage } from "./templates.styles";

type Props = {
  children: React.ReactNode;
};

function Page({ children }: Props) {
  return <StyledPage>{children}</StyledPage>;
}

export default Page;
