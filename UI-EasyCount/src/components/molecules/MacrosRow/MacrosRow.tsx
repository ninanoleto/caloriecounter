import { MacrosDto } from "../../../services/dayService";
import MacrosCell from "../../atoms/MacrosCell/MacrosCell";
import {
  CellColor,
  CellVariant,
} from "../../atoms/MacrosCell/MacrosCell.types";
import { MarginProps } from "../../shared/types.shared";
import { StyledMacrosRow } from "./MacrosRow.styles";

interface MacrosRowProps {
  color?: CellColor;
  margin?: MarginProps;
  variant: CellVariant;
  macros: MacrosDto;
}

const MacrosRow = (props: MacrosRowProps) => {
  const { color, margin, variant, macros } = props;
  return (
    <StyledMacrosRow>
      <span>{variant}</span>
      <MacrosCell color={color} variant={variant} margin={margin}>
        {macros.kcal}
      </MacrosCell>
      <MacrosCell color={color} variant={variant} margin={margin}>
        {macros.carbs}
      </MacrosCell>
      <MacrosCell color={color} variant={variant} margin={margin}>
        {macros.fat}
      </MacrosCell>
      <MacrosCell color={color} variant={variant} margin={margin}>
        {macros.protein}
      </MacrosCell>
    </StyledMacrosRow>
  );
};

export default MacrosRow;
