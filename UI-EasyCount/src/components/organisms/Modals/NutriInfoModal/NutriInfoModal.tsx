import { useRef } from "react";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
import { NewFoodPortionDto } from "../../../../services/foodPortionService";
import { FoodDto } from "../../../../services/foodService";
import Button from "../../../atoms/Buttons/ButtonIcon/Button";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "../../../atoms/Buttons/ButtonIcon/Button.types";
import ButtonSquare from "../../../atoms/Buttons/ButtonSquare/ButtonSquare";
import { ButtonSquareColor } from "../../../atoms/Buttons/ButtonSquare/ButtonSquare.types";
import Icon from "../../../atoms/Icons/Icon";
import {
  IconColor,
  IconImg,
  IconVariant,
} from "../../../atoms/Icons/Icon.types";
import MacroLabels from "../../../molecules/MacroLabels/MacroLabels";
import { Delete, Save, SaveMany } from "../../../shared/methodTypes.shared";
import {
  StyledNutriInfo,
  IconWrapper,
  Title,
  StyledNutriInfoWrapper,
  Subtitle,
  NutriValuesWrapper,
  NutriValue,
} from "./NutriInfoModal.styles";

interface NutriInfoModalProps {
  food: FoodDto | undefined;
  mealId: number;
  isModalOpen: boolean;
  toggleModal: () => void;
  chooseGoBack: () => void;
  addFoodPortionToMeal: SaveMany<NewFoodPortionDto>;
  deleteFoodFromDb: Delete;
}

const NutriInfoModal = (props: NutriInfoModalProps) => {
  const {
    food,
    mealId,
    isModalOpen,
    toggleModal,
    chooseGoBack,
    addFoodPortionToMeal,
    deleteFoodFromDb,
  } = props;

  const remove = () => {
    if (food === undefined) {
      toggleClose();
    } else {
      deleteFoodFromDb(food.id);
      toggleClose();
    }
  };

  const addToMeal = () => {
    if (food === undefined) {
      toggleClose();
    } else {
      const foodPortion: NewFoodPortionDto = {
        quantityInGrams: food.portion,
        foodId: food.id,
        mealId,
      };

      addFoodPortionToMeal([foodPortion]);
      toggleClose();
      chooseGoBack();
    }
  };

  const toggleClose = () => {
    if (isModalOpen) {
      toggleModal();
    }
  };

  const calcMacro100g = (portion: number, macro: number): number =>
    Math.floor((100 * macro) / portion);

  const infoRef = useRef(null);
  useOnClickOutside(infoRef, toggleClose);

  return (
    <StyledNutriInfoWrapper isOpen={isModalOpen}>
      <StyledNutriInfo ref={infoRef}>
        <IconWrapper>
          <Icon
            img={IconImg.Close}
            color={IconColor.Teal}
            variant={IconVariant.NoHover}
            onClick={toggleModal}
          />
        </IconWrapper>
        <Title>Nutritional Information</Title>
        <Subtitle>{food?.name}</Subtitle>
        <MacroLabels isNutriInfo />
        {food && food.portion !== 100 && (
          <NutriValuesWrapper>
            <NutriValue>{100}</NutriValue>
            <NutriValue>{calcMacro100g(food.portion, food.kcal)}</NutriValue>
            <NutriValue>{calcMacro100g(food.portion, food.carbs)}</NutriValue>
            <NutriValue>{calcMacro100g(food.portion, food.fat)}</NutriValue>
            <NutriValue>{calcMacro100g(food.portion, food.protein)}</NutriValue>
          </NutriValuesWrapper>
        )}
        <NutriValuesWrapper>
          <NutriValue>{food?.portion}</NutriValue>
          <NutriValue>{food?.kcal}</NutriValue>
          <NutriValue>{food?.carbs}</NutriValue>
          <NutriValue>{food?.fat}</NutriValue>
          <NutriValue>{food?.protein}</NutriValue>
        </NutriValuesWrapper>

        <ButtonSquare
          color={ButtonSquareColor.Green}
          margin={{ marginTop: 40 }}
          onClick={addToMeal}
        >
          Add to meal
        </ButtonSquare>
        <Button
          color={ButtonColor.Burgundy}
          variant={ButtonVariant.Delete}
          size={ButtonSize.Medium}
          margin={{ margin: [20, 0, 0, 7] }}
          onClick={remove}
        >
          Delete
        </Button>
      </StyledNutriInfo>
    </StyledNutriInfoWrapper>
  );
};

export default NutriInfoModal;
