import { useEffect } from "react";
import Input from "../../atoms/Inputs/Input";
import { InputType } from "../../atoms/Inputs/Input.types";

interface PresetInputProps {
  inputValues: Record<string, string>;
  handleChanges: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  kcalValue: string;
  setKcalValue: React.Dispatch<React.SetStateAction<string>>;
}

const PresetInputs = (props: PresetInputProps) => {
  const { inputValues, handleChanges, kcalValue, setKcalValue } = props;

  const handleKcal = () => {
    const carbs = Number(inputValues.carbs);
    const fat = Number(inputValues.fat);
    const protein = Number(inputValues.protein);

    const kcal = protein * 4 + fat * 9 + carbs * 4;

    setKcalValue((Math.round(kcal / 10) * 10).toString());
  };

  useEffect(() => {
    handleKcal();
  }, [inputValues]);

  return (
    <>
      <Input
        name="name"
        label={InputType.Name}
        inputValue={inputValues.name}
        onChange={handleChanges}
      />
      <Input
        name="kcal"
        label={InputType.Kcal}
        inputValue={kcalValue}
        onChange={handleKcal}
        disabled={true}
      />
      <Input
        name="carbs"
        label={InputType.Carbs}
        inputValue={inputValues.carbs}
        onChange={handleChanges}
      />
      <Input
        name="fat"
        label={InputType.Fat}
        inputValue={inputValues.fat}
        onChange={handleChanges}
      />
      <Input
        name="protein"
        label={InputType.Protein}
        inputValue={inputValues.protein}
        onChange={handleChanges}
      />
    </>
  );
};

export default PresetInputs;
