import { useEffect } from "react";
import Input from "../../atoms/Inputs/Input";
import { InputType } from "../../atoms/Inputs/Input.types";

interface NewFoodInputProps {
  inputValues: Record<string, string>;
  handleChanges: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewFoodInputs = (props: NewFoodInputProps) => {
  const { inputValues, handleChanges } = props;

  return (
    <>
      <Input
        label={InputType.NewFoodName}
        name="name"
        inputValue={inputValues.name}
        onChange={handleChanges}
      />
      <Input
        label={InputType.FoodPortion}
        name="portion"
        inputValue={inputValues.portion}
        onChange={handleChanges}
      />
      <Input
        label={InputType.KcalPerPortion}
        name="kcal"
        inputValue={inputValues.kcal}
        onChange={handleChanges}
      />
      <Input
        label={InputType.CarbsPerPortion}
        name="carbs"
        inputValue={inputValues.carbs}
        onChange={handleChanges}
      />
      <Input
        label={InputType.FatPerPortion}
        name="fat"
        inputValue={inputValues.fat}
        onChange={handleChanges}
      />
      <Input
        label={InputType.ProteinPerPortion}
        name="protein"
        inputValue={inputValues.protein}
        onChange={handleChanges}
      />
    </>
  );
};

export default NewFoodInputs;
