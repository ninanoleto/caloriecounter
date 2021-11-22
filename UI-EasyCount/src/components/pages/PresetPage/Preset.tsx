import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useManyInputState } from "../../../hooks/useInputState";
import {
  PresetDto,
  NewPresetDto,
  presetService,
} from "../../../services/presetService";

import ButtonSquare from "../../atoms/Buttons/ButtonSquare/ButtonSquare";
import PresetInputs from "../../molecules/ManyInputs/PresetInputs";
import {
  ButtonWrapper,
  DailyGoalsForm,
  DailyGoalsTitle,
  FormWrapper,
  InputWrapper,
  StyledDailyGoals,
  Title,
} from "./Preset.styles";

interface PresetProps extends RouteComponentProps {}

const Preset = (props: PresetProps) => {
  const [preset, setPreset] = useState<PresetDto>();
  const [kcalValue, setKcalValue] = useState("");

  const initialValues = {
    name: "",
    carbs: "",
    fat: "",
    protein: "",
  };
  const [inputValues, handleChanges] = useManyInputState(initialValues);

  useEffect(() => {
    setPreset(preset);
  }, [preset]);

  const savePreset = async (newPreset: NewPresetDto): Promise<void> => {
    const preset = await presetService.create(newPreset);
    setPreset(preset);
  };

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

    savePreset(newPreset);
  };

  if (preset) {
    props.history.push({
      pathname: "/foodDiary",
    });
  }

  return (
    <StyledDailyGoals>
      <DailyGoalsTitle>
        Set up your daily calories and macronutrients goals
      </DailyGoalsTitle>
      <FormWrapper>
        <DailyGoalsForm onSubmit={handleSubmit}>
          <Title>Your macro goals</Title>
          <InputWrapper>
            <PresetInputs
              inputValues={inputValues}
              handleChanges={handleChanges}
              kcalValue={kcalValue}
              setKcalValue={setKcalValue}
            />
          </InputWrapper>
          <ButtonWrapper>
            <ButtonSquare type="submit">Save Goals</ButtonSquare>
          </ButtonWrapper>
        </DailyGoalsForm>
      </FormWrapper>
    </StyledDailyGoals>
  );
};

export default Preset;
