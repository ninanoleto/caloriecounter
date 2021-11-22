import { useInputState } from "../../../../hooks/useInputState";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInputBox,
  IconWrapper,
  StyledInputCheckbox,
} from "./AddCheckedFormRow.styles";

import Icon from "../../../atoms/Icons/Icon";
import {
  IconColor,
  IconImg,
  IconVariant,
} from "../../../atoms/Icons/Icon.types";
import { FoodDto } from "../../../../services/foodService";
import { useToggle } from "../../../../hooks/useToggle";
import { NewFoodPortionDto } from "../../../../services/foodPortionService";

interface AddCheckedFormRowProps {
  food: FoodDto;
  mealId: number;
  portionToAddToMeal: NewFoodPortionDto[];
  setPortionToAddToMeal: React.Dispatch<
    React.SetStateAction<NewFoodPortionDto[]>
  >;
  toggleOpen: () => void;
  setFood: React.Dispatch<React.SetStateAction<FoodDto | undefined>>;
}

const AddCheckedFormRow = (props: AddCheckedFormRowProps) => {
  const {
    food,
    mealId,
    portionToAddToMeal,
    setPortionToAddToMeal,
    toggleOpen,
    setFood,
  } = props;

  let [isChecked, toggleIsChecked] = useToggle(false);

  let [inputValue, handleChange] = useInputState("100");

  const toggle = () => {
    toggleIsChecked();
    refreshCheckedFoodPortion();
  };

  const handleClick = () => {
    setFood(food);
    toggleOpen();
  };

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    evt.currentTarget.select();
  };

  const createNewFoodPortion = () => {
    const newFoodPortion: NewFoodPortionDto = {
      mealId,
      foodId: food.id,
      quantityInGrams: Number((isNaN(Number(inputValue)) && "0") || inputValue),
    };

    return newFoodPortion;
  };

  const refreshCheckedFoodPortion = () => {
    if (!isChecked) {
      // if isChecked not false
      const newFoodPortion = createNewFoodPortion();

      setPortionToAddToMeal([...portionToAddToMeal, newFoodPortion]);
    } else {
      let filteredFoodPortions = portionToAddToMeal.filter(
        (foodPortion) => foodPortion.foodId !== food.id
      );

      setPortionToAddToMeal(filteredFoodPortions);
    }
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(evt);
    if (isChecked) toggle();
  };

  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={`foodQty-${food.id}`}>{food.name}</StyledLabel>
      <StyledInputBox
        type="text"
        value={inputValue}
        name={`foodQty-${food.id}`}
        onChange={(evt) => handleInputChange(evt)}
        onFocus={handleFocus}
      />
      <IconWrapper>
        <Icon
          img={IconImg.See}
          color={IconColor.Teal}
          variant={IconVariant.NoHover}
          onClick={handleClick}
        />
      </IconWrapper>
      <StyledInputCheckbox
        id={`${food.id}`}
        type="checkbox"
        onChange={toggle}
        checked={isChecked}
      />
    </StyledInputWrapper>
  );
};

export default AddCheckedFormRow;
