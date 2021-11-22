import { MacrosDto } from "../../../services/dayService";
import { PresetDto } from "../../../services/presetService";
import {
  CellColor,
  CellVariant,
} from "../../atoms/MacrosCell/MacrosCell.types";
import MacrosRow from "../../molecules/MacrosRow/MacrosRow";

const dayFooterStyle = {
  margin: "3px 0",
};

interface DayFooterProps {
  dayGoals: PresetDto;
  totalMacros: MacrosDto;
  macrosLeft: MacrosDto;
}

const DayFooter = (props: DayFooterProps) => {
  const { dayGoals, totalMacros, macrosLeft } = props;

  return (
    <div style={dayFooterStyle}>
      <MacrosRow
        variant={CellVariant.Current}
        color={CellColor.LightPink}
        margin={{ margin: [3, 6, 3, 6] }}
        macros={totalMacros}
      />
      <MacrosRow
        variant={CellVariant.DailyGoals}
        color={CellColor.LightPink}
        margin={{ margin: [3, 6, 3, 6] }}
        macros={dayGoals}
      />
      <MacrosRow
        variant={CellVariant.Remaining}
        margin={{ margin: [3, 6, 3, 6] }}
        macros={macrosLeft}
      />
    </div>
  );
};

export default DayFooter;
