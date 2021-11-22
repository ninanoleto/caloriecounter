import { useRef, useState } from "react";
import { useManyInputState } from "../../../../hooks/useInputState";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
import { NewPresetDto, PresetDto } from "../../../../services/presetService";
import ButtonSquare from "../../../atoms/Buttons/ButtonSquare/ButtonSquare";
import { ButtonSquareColor } from "../../../atoms/Buttons/ButtonSquare/ButtonSquare.types";
import Icon from "../../../atoms/Icons/Icon";
import { IconImg, IconVariant } from "../../../atoms/Icons/Icon.types";
import PresetInputs from "../../../molecules/ManyInputs/PresetInputs";
import { UpdateObj } from "../../../shared/methodTypes.shared";
import {
  ButtonWrapper,
  IconWrapper,
  StyledEditPresetFormBg,
  StyledEditPresetFormWrapper,
  StyledEditPresetModalForm,
  Title,
} from "./ChangePreset.styles";

interface EditPresetProps {
  currentPreset: PresetDto;
  edit: UpdateObj<NewPresetDto>;
  toggleOpen: () => void;
  isHiddenFormOpen: boolean;
}

const EditPreset = (props: EditPresetProps) => {
  const { currentPreset, edit, toggleOpen, isHiddenFormOpen } = props;

  const [kcalValue, setKcalValue] = useState(currentPreset.kcal.toString());

  const toggleClose = () => {
    isHiddenFormOpen && toggleOpen();
    resetAll();
  };

  const initialValues = {
    name: currentPreset.name,
    carbs: currentPreset.carbs.toString(),
    fat: currentPreset.fat.toString(),
    protein: currentPreset.protein.toString(),
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

    edit(currentPreset.id, newPreset);
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
          <Title>Edit your Macros Goal:</Title>
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
              edit goals
            </ButtonSquare>
          </ButtonWrapper>
        </StyledEditPresetModalForm>
      </StyledEditPresetFormWrapper>
    </StyledEditPresetFormBg>
  );
};

export default EditPreset;
