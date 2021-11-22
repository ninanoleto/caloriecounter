import { MarginProps, PaddingProps } from "../../shared/types.shared";
import { StyledMacrosCell } from "./MacrosCell.styles";
import { CellColor, CellVariant } from "./MacrosCell.types";

interface MacrosCellProps {
  children: number | string;
  color?: CellColor;
  margin?: MarginProps;
  variant?: CellVariant;
}

const MacrosCell = (props: MacrosCellProps) => {
  const { children, color, margin, variant } = props;

  return (
    <StyledMacrosCell
      color={color || CellColor.White}
      margin={margin || {}}
      variant={variant || ""}
    >
      {children}
    </StyledMacrosCell>
  );
};

export default MacrosCell;
