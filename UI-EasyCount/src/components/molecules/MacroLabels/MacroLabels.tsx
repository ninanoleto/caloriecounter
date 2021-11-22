import MacroCircle from "../../atoms/MacroCircle/MacroCircle";
import { MacroCircleName } from "../../atoms/MacroCircle/MacroCircle.types";
import { StyledMacroLabels } from "./MacroLabels.styles";

interface MacroLabelsProps {
  isNutriInfo?: boolean;
}

const MacroLabels = (props: MacroLabelsProps) => {
  const { isNutriInfo } = props;

  return (
    <StyledMacroLabels>
      {isNutriInfo && (
        <MacroCircle
          macro={MacroCircleName.Portion}
          margin={{ margin: [0, 5, 0, 10] }}
          hasNutriInfo={isNutriInfo || false}
        />
      )}
      <MacroCircle
        macro={MacroCircleName.Calories}
        margin={isNutriInfo ? { marginX: 5 } : { margin: [0, 5, 0, 10] }}
        hasNutriInfo={isNutriInfo || false}
      />
      <MacroCircle
        macro={MacroCircleName.Carbs}
        margin={{ marginX: 5 }}
        hasNutriInfo={isNutriInfo || false}
      />
      <MacroCircle
        macro={MacroCircleName.Fat}
        margin={{ marginX: 5 }}
        hasNutriInfo={isNutriInfo || false}
      />
      <MacroCircle
        macro={MacroCircleName.Protein}
        margin={{ margin: [0, 10, 0, 5] }}
        hasNutriInfo={isNutriInfo || false}
      />
    </StyledMacroLabels>
  );
};

export default MacroLabels;
