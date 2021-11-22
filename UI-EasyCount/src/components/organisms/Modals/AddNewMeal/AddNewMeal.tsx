import { useRef } from "react";
import { useInputState } from "../../../../hooks/useInputState";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";

import Icon from "../../../atoms/Icons/Icon";
import { IconImg, IconVariant } from "../../../atoms/Icons/Icon.types";
import Input from "../../../atoms/Inputs/Input";
import { InputType } from "../../../atoms/Inputs/Input.types";
import ButtonSquare from "../../../atoms/Buttons/ButtonSquare/ButtonSquare";
import { Save } from "../../../shared/methodTypes.shared";

import {
  IconWrapper,
  StyledAddFormWrapper,
  StyledAddFormBg,
  Title,
  StyledAddForm,
} from "./AddNewMeal.styles";

interface AddNewMealProps {
  save: Save;
  toggleOpen: () => void;
  isHiddenFormOpen: boolean;
  onSubmit?: () => void;
}

const AddNewMeal = (props: AddNewMealProps) => {
  const { save, toggleOpen, isHiddenFormOpen, onSubmit } = props;

  const [inputValue, handleChange, reset] = useInputState("");

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (inputValue.trim() === "") {
      toggleOpen();
    } else {
      save(inputValue);
      reset();

      onSubmit !== undefined && onSubmit();
      toggleOpen();
    }
  };

  const toggleClose = () => {
    if (isHiddenFormOpen) {
      reset();
      toggleOpen();
    }
  };

  const formRef = useRef(null);
  useOnClickOutside(formRef, toggleClose);

  return (
    <StyledAddFormBg isOpen={isHiddenFormOpen}>
      <StyledAddFormWrapper ref={formRef}>
        <IconWrapper>
          <Icon
            img={IconImg.Close}
            variant={IconVariant.NoHover}
            onClick={toggleClose}
          />
        </IconWrapper>
        <StyledAddForm onSubmit={handleSubmit}>
          <Title>Add new Meal</Title>
          <Input
            label={InputType.MealName}
            inputValue={inputValue}
            onChange={handleChange}
          />
          <ButtonSquare type="submit" margin={{ marginTop: 20 }}>
            Save Meal
          </ButtonSquare>
        </StyledAddForm>
      </StyledAddFormWrapper>
    </StyledAddFormBg>
  );
};

export default AddNewMeal;
