import { useRef } from "react";
import { useInputState } from "../../../../hooks/useInputState";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
import Icon from "../../../atoms/Icons/Icon";
import {
  IconColor,
  IconImg,
  IconVariant,
} from "../../../atoms/Icons/Icon.types";
import { Update } from "../../../shared/methodTypes.shared";
import { InlineEditInput, StyledInlineEditForm } from "./InlineEditForm.styles";
import { EditFormVariant } from "./InlineEditForm.types";

interface EditFormProps {
  id: number;
  value: string;
  toggleEdit: () => void;
  update: Update;
  variant?: EditFormVariant;
}

const InlineEditForm = (props: EditFormProps) => {
  const { id, value, toggleEdit, update, variant } = props;
  const [inputValue, handleChange, reset] = useInputState(value);

  const handleSubmit = (evt: React.SyntheticEvent): void => {
    evt.preventDefault();
    update(id, inputValue);
    reset();
    toggleEdit();
  };

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) =>
    evt.currentTarget.select();

  const inputRef = useRef(null);
  useOnClickOutside(inputRef, toggleEdit);

  return (
    <StyledInlineEditForm onSubmit={handleSubmit} ref={inputRef}>
      <InlineEditInput
        value={inputValue}
        onChange={handleChange}
        variant={variant || EditFormVariant.Qty}
        autoFocus
        onFocus={handleFocus}
      />
      <Icon
        img={IconImg.Check}
        color={IconColor.Green}
        variant={IconVariant.NoHover}
      />
    </StyledInlineEditForm>
  );
};

export default InlineEditForm;
