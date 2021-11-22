import { MarginProps, PaddingProps } from "../../shared/types.shared";
import { CircleElement, CircleElementWrapper } from "./MacroCircle.styles";
import { MacroCircleName } from "./MacroCircle.types";

const macroCircleIdx: Record<MacroCircleName, string> = {
  [MacroCircleName.Calories]: "kcal",
  [MacroCircleName.Carbs]: "g",
  [MacroCircleName.Fat]: "g",
  [MacroCircleName.Protein]: "g",
  [MacroCircleName.Portion]: "g",
};

interface MacroCircleProps {
  margin: MarginProps;
  macro: MacroCircleName;
  hasNutriInfo: boolean;
}

const MacroCircle = (props: MacroCircleProps) => {
  const { macro, margin, hasNutriInfo } = props;

  return (
    <CircleElementWrapper>
      <CircleElement isTeal={hasNutriInfo} margin={margin}>
        {macro}
        <span>{macroCircleIdx[macro]}</span>
      </CircleElement>
    </CircleElementWrapper>
  );
};

export default MacroCircle;
