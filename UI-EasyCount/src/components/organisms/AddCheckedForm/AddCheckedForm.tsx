import { FoodDto } from "../../../services/foodService";
import Button from "../../atoms/Buttons/ButtonIcon/Button";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "../../atoms/Buttons/ButtonIcon/Button.types";
import { SaveMany } from "../../shared/methodTypes.shared";
import AddCheckedFormRow from "../../molecules/Forms/AddCheckedFormRow/AddCheckedFormRow";

import {
  StyledBody,
  Title,
  StyledAddCheckedForm,
  TitleWrapper,
  NoFoodTitle,
} from "./AddCheckedForm.styles";
import { TitleColor } from "./AddCheckedForm.types";
import { useState } from "react";
import { NewFoodPortionDto } from "../../../services/foodPortionService";

interface AddCheckedFormProps {
  mealId: number;
  allFood: FoodDto[] | undefined;
  goBack: () => void;
  toggleModal: () => void;
  createMany: SaveMany<NewFoodPortionDto>;
  setCurrentFood: React.Dispatch<React.SetStateAction<FoodDto | undefined>>;
}

const AddCheckedForm = (props: AddCheckedFormProps) => {
  const [portionsToAddToMeal, setPortionsToAddToMeal] = useState<
    NewFoodPortionDto[]
  >([]);

  const { mealId, allFood, goBack, toggleModal, createMany, setCurrentFood } =
    props;

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    createMany(portionsToAddToMeal);
    goBack();
  };

  return (
    <StyledAddCheckedForm onSubmit={handleSubmit}>
      <TitleWrapper>
        <Title width="40%">Food Name</Title>
        <Title width="15%">Quantity</Title>
        <Title width="15%" color={TitleColor.Teal}>
          Nutri Info
        </Title>
        <Title width="15%" color={TitleColor.Burgundy}>
          Add to meal
        </Title>
      </TitleWrapper>
      <StyledBody>
        {allFood === undefined || allFood.length <= 0 ? (
          <NoFoodTitle>There are no foods yet on the Database</NoFoodTitle>
        ) : (
          <>
            {allFood.map((food) => (
              <AddCheckedFormRow
                food={food}
                setFood={setCurrentFood}
                mealId={mealId}
                toggleOpen={toggleModal}
                setPortionToAddToMeal={setPortionsToAddToMeal}
                portionToAddToMeal={portionsToAddToMeal}
              />
            ))}
          </>
        )}
      </StyledBody>
      {allFood !== undefined && allFood.length > 0 && (
        <Button
          color={ButtonColor.Burgundy}
          variant={ButtonVariant.AddChecked}
          size={ButtonSize.Large}
          type="submit"
        >
          Add checked
        </Button>
      )}
    </StyledAddCheckedForm>
  );
};

export default AddCheckedForm;
