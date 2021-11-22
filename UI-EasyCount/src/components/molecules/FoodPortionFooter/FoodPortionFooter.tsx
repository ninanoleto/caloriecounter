import { MacrosDto } from "../../../services/dayService";
import Button from "../../atoms/Buttons/ButtonIcon/Button";
import {
  ButtonColor,
  ButtonVariant,
} from "../../atoms/Buttons/ButtonIcon/Button.types";
import MacrosCell from "../../atoms/MacrosCell/MacrosCell";
import {
  CellColor,
  CellVariant,
} from "../../atoms/MacrosCell/MacrosCell.types";
import {
  StyledButtonWrapper,
  StyledFoodPortionFooter,
  StyledMealMacros,
} from "./FoodPortionFooter.styles";

interface FoodPortionFooterProps {
  mealId: number;
  macros: MacrosDto;
  hasFoodPortions: boolean;
  remove: () => void;
  pushToHistory: (path: string) => void;
}

const FoodPortionFooter = (props: FoodPortionFooterProps) => {
  const { kcal, carbs, fat, protein } = props.macros;
  const { mealId, hasFoodPortions, remove, pushToHistory } = props;

  const push = () => {
    let path = `/food?meal=${mealId}`;
    pushToHistory(path);
  };

  return (
    <>
      <StyledFoodPortionFooter>
        {hasFoodPortions ? (
          <>
            <StyledButtonWrapper>
              <Button
                color={ButtonColor.DarkGreen}
                variant={ButtonVariant.Add}
                onClick={push}
              >
                Add food to meal
              </Button>
              <Button
                color={ButtonColor.DarkRed}
                variant={ButtonVariant.Delete}
                onClick={remove}
              >
                Delete all food
              </Button>
            </StyledButtonWrapper>
            <StyledMealMacros>
              <MacrosCell
                margin={{ margin: [1, 1.7, 1, 1.7] }}
                color={CellColor.Burgundy}
                variant={CellVariant.MealMacros}
              >
                {kcal}
              </MacrosCell>
              <MacrosCell
                margin={{ margin: [1, 1.7, 1, 1.7] }}
                color={CellColor.Burgundy}
                variant={CellVariant.MealMacros}
              >
                {carbs}
              </MacrosCell>
              <MacrosCell
                margin={{ margin: [1, 1.7, 1, 1.7] }}
                color={CellColor.Burgundy}
                variant={CellVariant.MealMacros}
              >
                {fat}
              </MacrosCell>
              <MacrosCell
                margin={{ margin: [1, 6, 1, 1.7] }}
                color={CellColor.Burgundy}
                variant={CellVariant.MealMacros}
              >
                {protein}
              </MacrosCell>
            </StyledMealMacros>
          </>
        ) : (
          <StyledButtonWrapper>
            <Button
              color={ButtonColor.DarkGreen}
              variant={ButtonVariant.Add}
              onClick={push}
            >
              Add food to meal
            </Button>
          </StyledButtonWrapper>
        )}
      </StyledFoodPortionFooter>
    </>
  );
};

export default FoodPortionFooter;
