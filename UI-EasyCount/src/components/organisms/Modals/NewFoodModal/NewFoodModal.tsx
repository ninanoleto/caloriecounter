import { useRef, useState } from "react";
import { useManyInputState } from "../../../../hooks/useInputState";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
import { NewFoodDto } from "../../../../services/foodService";
import ButtonSquare from "../../../atoms/Buttons/ButtonSquare/ButtonSquare";
import { ButtonSquareColor } from "../../../atoms/Buttons/ButtonSquare/ButtonSquare.types";
import Icon from "../../../atoms/Icons/Icon";
import {
  IconColor,
  IconImg,
  IconVariant,
} from "../../../atoms/Icons/Icon.types";
import Input from "../../../atoms/Inputs/Input";
import { InputType } from "../../../atoms/Inputs/Input.types";
import NewFoodInputs from "../../../molecules/ManyInputs/NewFoodInputs";
import { SaveObj } from "../../../shared/methodTypes.shared";
import {
  ButtonWrapper,
  IconWrapper,
  StyledModalBg,
  StyledNewFoodModalForm,
  StyledNewFoodModalWrapper,
  Title,
} from "./NewFoodModal.styles";

interface NewFoodModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  addNewFood: SaveObj<NewFoodDto>;
}

const NewFoodModal = (props: NewFoodModalProps) => {
  const { isModalOpen, toggleModal, addNewFood } = props;

  const toggleClose = () => {
    isModalOpen && toggleModal();
    resetAll();
  };

  const initialValues = {
    name: "",
    portion: "",
    kcal: "",
    carbs: "",
    fat: "",
    protein: "",
  };

  const [inputValues, handleChanges, resetAll] =
    useManyInputState(initialValues);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    const name = inputValues.name;
    const portion = Number(inputValues.portion);
    const kcal = Number(inputValues.kcal);
    const carbs = Number(inputValues.carbs);
    const fat = Number(inputValues.fat);
    const protein = Number(inputValues.protein);

    const newFood: NewFoodDto = {
      name,
      portion,
      kcal,
      carbs,
      fat,
      protein,
    };

    addNewFood(newFood);
    resetAll();
    toggleModal();
  };

  const infoRef = useRef(null);
  useOnClickOutside(infoRef, toggleClose);

  return (
    <StyledModalBg isOpen={isModalOpen}>
      <StyledNewFoodModalWrapper ref={infoRef}>
        <IconWrapper>
          <Icon
            img={IconImg.Close}
            color={IconColor.Teal}
            variant={IconVariant.NoHover}
            onClick={toggleModal}
          />
        </IconWrapper>
        <StyledNewFoodModalForm onSubmit={handleSubmit}>
          <Title>Create a new Food from scratch</Title>
          <NewFoodInputs
            inputValues={inputValues}
            handleChanges={handleChanges}
          />
          <ButtonWrapper>
            <ButtonSquare
              color={ButtonSquareColor.Green}
              type="submit"
              margin={{ margin: [20, 0, 10, 0] }}
            >
              Save new Food
            </ButtonSquare>
          </ButtonWrapper>
        </StyledNewFoodModalForm>
      </StyledNewFoodModalWrapper>
    </StyledModalBg>
  );
};

export default NewFoodModal;
