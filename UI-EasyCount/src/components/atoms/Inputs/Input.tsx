import { StyledInputWrapper, StyledLabel, StyledInput } from "./Input.styles";
import { InputType } from "./Input.types";

const placeholderIdx: Record<InputType, string> = {
  [InputType.MealName]: "eg.: Breakfast",

  [InputType.Name]: "eg.: High Carbs",
  [InputType.Kcal]: "Kcal Goal",
  [InputType.Carbs]: "Carbs Goal",
  [InputType.Fat]: "Fat Goal",
  [InputType.Protein]: "Protein Goal",

  [InputType.Search]: "",

  [InputType.NewFoodName]: "eg.: Banana Bread with honey - Baked",
  [InputType.FoodPortion]: "Portion quantity in grams",
  [InputType.KcalPerPortion]: "Kcal per portion",
  [InputType.CarbsPerPortion]: "Carbs per portion",
  [InputType.FatPerPortion]: "Fat per portion",
  [InputType.ProteinPerPortion]: "Protein per portion",
};

interface InputProps {
  label: InputType;
  inputValue: string;
  onChange: React.ChangeEventHandler;
  name?: string;
  disabled?: boolean;
}

const Input = (props: InputProps) => {
  const { label, inputValue, onChange, name, disabled } = props;

  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={label} label={label}>{`${label}:`}</StyledLabel>
      <StyledInput
        required
        id={label}
        name={name || ""}
        type="text"
        placeholder={placeholderIdx[label]}
        value={inputValue}
        onChange={onChange}
        disabled={disabled}
      />
    </StyledInputWrapper>
  );
};

export default Input;
