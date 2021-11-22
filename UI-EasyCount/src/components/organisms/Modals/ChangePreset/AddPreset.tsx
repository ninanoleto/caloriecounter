import { useRef, useState } from "react";
import { useManyInputState } from "../../../../hooks/useInputState";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
import { NewPresetDto, PresetDto } from "../../../../services/presetService";
import ButtonSquare from "../../../atoms/Buttons/ButtonSquare/ButtonSquare";
import { ButtonSquareColor } from "../../../atoms/Buttons/ButtonSquare/ButtonSquare.types";
import Icon from "../../../atoms/Icons/Icon";
import { IconImg, IconVariant } from "../../../atoms/Icons/Icon.types";
import PresetInputs from "../../../molecules/ManyInputs/PresetInputs";
import { SaveObj } from "../../../shared/methodTypes.shared";
import {
  ButtonWrapper,
  IconWrapper,
  StyledEditPresetFormBg,
  StyledEditPresetFormWrapper,
  StyledEditPresetModalForm,
  Title,
} from "./ChangePreset.styles";

interface AddPresetProps {
  save: SaveObj<NewPresetDto>;
  toggleOpen: () => void;
  isHiddenFormOpen: boolean;
}

const AddPreset = (props: AddPresetProps) => {
  const { save, toggleOpen, isHiddenFormOpen } = props;
  const [kcalValue, setKcalValue] = useState("");

  const toggleClose = () => {
    isHiddenFormOpen && toggleOpen();
    resetAll();
  };

  const initialValues = {
    name: "",
    carbs: "",
    fat: "",
    protein: "",
  };

  const [inputValues, handleChanges, resetAll] =
    useManyInputState(initialValues);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    const kcal = Number(kcalValue);
    const carbs = Number(inputValues.carbs);
    const fat = Number(inputValues.fat);
    const protein = Number(inputValues.protein);

    const newPreset: NewPresetDto = {
      name: inputValues.name,
      kcal,
      carbs,
      fat,
      protein,
    };

    save(newPreset);
    resetAll();
    toggleClose();
  };

  const formRef = useRef(null);
  useOnClickOutside(formRef, toggleClose);

  return (
    <StyledEditPresetFormBg isOpen={isHiddenFormOpen}>
      <StyledEditPresetFormWrapper ref={formRef}>
        <IconWrapper>
          <Icon
            img={IconImg.Close}
            variant={IconVariant.NoHover}
            onClick={toggleClose}
          />
        </IconWrapper>
        <StyledEditPresetModalForm onSubmit={handleSubmit}>
          <Title>Save a new Macros Goal:</Title>
          <PresetInputs
            inputValues={inputValues}
            handleChanges={handleChanges}
            kcalValue={kcalValue}
            setKcalValue={setKcalValue}
          />
          <ButtonWrapper>
            <ButtonSquare
              color={ButtonSquareColor.Peach}
              type="submit"
              margin={{ margin: [20, 0, 10, 0] }}
            >
              save new goals
            </ButtonSquare>
          </ButtonWrapper>
        </StyledEditPresetModalForm>
      </StyledEditPresetFormWrapper>
    </StyledEditPresetFormBg>
  );
};

export default AddPreset;
