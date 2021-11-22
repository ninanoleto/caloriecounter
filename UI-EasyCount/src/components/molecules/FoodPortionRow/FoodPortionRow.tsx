import { useToggle } from "../../../hooks/useToggle";
import { FoodPortionSummaryDto, MacrosDto } from "../../../services/dayService";
import Icon from "../../atoms/Icons/Icon";
import { IconColor, IconImg } from "../../atoms/Icons/Icon.types";
import MacrosCell from "../../atoms/MacrosCell/MacrosCell";
import { CellVariant } from "../../atoms/MacrosCell/MacrosCell.types";
import { Delete, Update } from "../../shared/methodTypes.shared";
import InlineEditForm from "../Forms/InlineEditForm/InlineEditForm";
import {
  StyledFoodPortionRow,
  StyledLabels,
  StyledMacros,
} from "./FoodPortionRow.styles";

interface FoodPortionRowProps {
  foodPortion: FoodPortionSummaryDto;
  update: Update;
  removeFoodPortion: Delete;
}

const FoodPortionRow = (props: FoodPortionRowProps) => {
  const { update, removeFoodPortion, foodPortion } = props;
  const { id, quantityInGrams, macros, food } = foodPortion;

  const [isEditing, toggle] = useToggle(false);

  const remove = () => {
    removeFoodPortion(id);
  };

  return (
    <StyledFoodPortionRow>
      <StyledLabels>
        <MacrosCell
          margin={{ margin: [1, 1.7, 1, 0] }}
          variant={CellVariant.FoodName}
        >
          {food.foodName}
        </MacrosCell>
        {isEditing ? (
          <InlineEditForm
            id={id}
            value={quantityInGrams.toString()}
            toggleEdit={toggle}
            update={update}
          />
        ) : (
          <MacrosCell margin={{ margin: [1, 1.7, 1, 1.7] }}>
            {quantityInGrams.toString() + " g"}
          </MacrosCell>
        )}
        <Icon
          img={IconImg.Edit}
          color={IconColor.DarkPink}
          margin={{ marginLeft: 5 }}
          onClick={toggle}
        />
      </StyledLabels>
      <StyledMacros>
        <MacrosCell margin={{ margin: [1, 1.7, 1, 1.7] }}>
          {macros.kcal}
        </MacrosCell>
        <MacrosCell margin={{ margin: [1, 1.7, 1, 1.7] }}>
          {macros.carbs}
        </MacrosCell>
        <MacrosCell margin={{ margin: [1, 1.7, 1, 1.7] }}>
          {macros.fat}
        </MacrosCell>
        <MacrosCell margin={{ margin: [1, 6, 1, 1.7] }}>
          {macros.protein}
        </MacrosCell>
        <Icon
          img={IconImg.Remove}
          color={IconColor.BrightPrink}
          margin={{ marginRight: -19 }}
          onClick={remove}
        />
      </StyledMacros>
    </StyledFoodPortionRow>
  );
};

export default FoodPortionRow;
