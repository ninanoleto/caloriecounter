import { useRef } from "react";

import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
import { PresetDto } from "../../../../services/presetService";
import ButtonSquare from "../../../atoms/Buttons/ButtonSquare/ButtonSquare";
import { ButtonSquareColor } from "../../../atoms/Buttons/ButtonSquare/ButtonSquare.types";
import Icon from "../../../atoms/Icons/Icon";
import { IconImg, IconVariant } from "../../../atoms/Icons/Icon.types";
import { Delete } from "../../../shared/methodTypes.shared";
import {
  ButtonWrapper,
  IconWrapper,
  StyledEditPresetFormBg,
  StyledEditPresetFormWrapper,
  StyledEditPresetModalForm,
  Title,
} from "./ChangePreset.styles";

interface AddPresetProps {
  currentPreset: PresetDto;
  remove: Delete;
  toggleOpen: () => void;
  isHiddenFormOpen: boolean;
}

const AddPreset = (props: AddPresetProps) => {
  const { currentPreset, remove, toggleOpen, isHiddenFormOpen } = props;

  const toggleClose = () => {
    isHiddenFormOpen && toggleOpen();
  };

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    remove(currentPreset.id);
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
          <Title>
            Are you sure you want to delete your Macro Goal: "
            <span>{currentPreset.name}</span>"?
          </Title>
          <ButtonWrapper>
            <ButtonSquare
              color={ButtonSquareColor.Green}
              margin={{ margin: [20, 0, 10, 0] }}
              onClick={toggleClose}
            >
              Cancel
            </ButtonSquare>
            <ButtonSquare
              color={ButtonSquareColor.Red}
              margin={{ margin: [20, 0, 10, 0] }}
              type="submit"
            >
              Delete
            </ButtonSquare>
          </ButtonWrapper>
        </StyledEditPresetModalForm>
      </StyledEditPresetFormWrapper>
    </StyledEditPresetFormBg>
  );
};

export default AddPreset;
