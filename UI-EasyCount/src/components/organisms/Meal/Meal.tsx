import { useToggle } from "../../../hooks/useToggle";
import { MealSummaryDto } from "../../../services/dayService";
import Icon from "../../atoms/Icons/Icon";
import { IconColor, IconImg } from "../../atoms/Icons/Icon.types";
import FoodPortionFooter from "../../molecules/FoodPortionFooter/FoodPortionFooter";
import FoodPortionRow from "../../molecules/FoodPortionRow/FoodPortionRow";
import InlineEditForm from "../../molecules/Forms/InlineEditForm/InlineEditForm";
import { EditFormVariant } from "../../molecules/Forms/InlineEditForm/InlineEditForm.types";
import { Delete, Update } from "../../shared/methodTypes.shared";
import { StyledMealWrapper, StyledMeal, Title } from "./Meal.styles";

type MealProps = {
  meal: MealSummaryDto;
  updateMealName: Update;
  deleteMeal: Delete;
  deleteAllFoodPortion: Delete;
  updateFoodPortion: Update;
  deleteFoodPortion: Delete;
  pushToHistory: (path: string) => void;
};

const Meal = (props: MealProps) => {
  const {
    updateMealName,
    deleteMeal,
    deleteAllFoodPortion,
    updateFoodPortion,
    deleteFoodPortion,
    pushToHistory,
  } = props;

  const { id, name, foodPortions, macros } = props.meal;

  const [isEditing, toggle] = useToggle(false);

  const remove = () => {
    deleteMeal(id);
  };

  const removeFoodPortions = () => {
    deleteAllFoodPortion(id);
  };

  return (
    <StyledMealWrapper>
      <Title>
        {isEditing ? (
          <InlineEditForm
            id={id}
            value={name}
            toggleEdit={toggle}
            update={updateMealName}
            variant={EditFormVariant.Meal}
          />
        ) : (
          <span>{name}</span>
        )}
        <Icon
          img={IconImg.Edit}
          color={IconColor.DarkPink}
          margin={{ marginLeft: 5 }}
          onClick={toggle}
        />
        <Icon
          img={IconImg.Remove}
          color={IconColor.BrightPrink}
          onClick={remove}
        />
      </Title>
      <StyledMeal>
        {foodPortions.map((foodPortion) => (
          <FoodPortionRow
            foodPortion={foodPortion}
            update={updateFoodPortion}
            removeFoodPortion={deleteFoodPortion}
          />
        ))}
        <FoodPortionFooter
          mealId={id}
          macros={macros}
          hasFoodPortions={foodPortions.length > 0}
          remove={removeFoodPortions}
          pushToHistory={pushToHistory}
        />
      </StyledMeal>
    </StyledMealWrapper>
  );
};

export default Meal;
