import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Button from "../../atoms/Buttons/ButtonIcon/Button";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from "../../atoms/Buttons/ButtonIcon/Button.types";
import {
  ContentWrapper,
  StyledButtonWrapper,
  StyledFoodDiary,
  StyledDropdownPreset,
  StyledSelect,
} from "./FoodDiary.styles";

import DateHeader from "../../molecules/DateHeader/DateHeader";
import MacroLabels from "../../molecules/MacroLabels/MacroLabels";
import DayFooter from "../../organisms/DayFooter/DayFooter";
import Meal from "../../organisms/Meal/Meal";
import AddNewMeal from "../../organisms/Modals/AddNewMeal/AddNewMeal";
import { DateUtils } from "../../shared/DateUtils.shared";
import { dayService, DaySummaryDto } from "../../../services/dayService";
import { mealService } from "../../../services/mealService";
import { useToggle } from "../../../hooks/useToggle";
import { foodPortionService } from "../../../services/foodPortionService";
import {
  NewPresetDto,
  PresetDto,
  presetService,
} from "../../../services/presetService";
import { dayPresetService } from "../../../services/dayPresetService";
import { IconColor, IconImg, IconVariant } from "../../atoms/Icons/Icon.types";
import Icon from "../../atoms/Icons/Icon";
import AddPreset from "../../organisms/Modals/ChangePreset/AddPreset";
import DeletePreset from "../../organisms/Modals/ChangePreset/DeletePreset";
import EditPreset from "../../organisms/Modals/ChangePreset/EditPreset";
import { Loading } from "./FoodDiary.styles";

/**
 * Tries to parse a date from query parameters
 * @returns the parsed date or undefined if the date doesn't exist or cannot be parsed
 */
const tryParseDateFromURL = (
  queryParams: URLSearchParams
): Date | undefined => {
  const dateParam = queryParams.get("date");
  if (dateParam === null) return undefined;

  const date = new Date(dateParam);
  if (Number.isNaN(date.getTime())) return undefined;

  return date;
};

const FoodDiary = () => {
  const navigate = useNavigate();
  const [queryParams, _] = useSearchParams();
  const defaultDate = tryParseDateFromURL(queryParams) ?? new Date();

  const [allPreset, setAllPreset] = useState<PresetDto[]>();
  const [date, setDate] = useState<Date>(defaultDate);
  const [daySummary, setDaySummary] = useState<DaySummaryDto>();

  const [isHiddenAddNewMealFormOpen, toggleHiddenAddNewMealForm] =
    useToggle(false);
  const [isHiddenEditPresetFormOpen, toggleHiddenEditPresetForm] =
    useToggle(false);
  const [isHiddenAddPresetFormOpen, toggleHiddenAddPresetForm] =
    useToggle(false);
  const [isHiddenDeletePresetFormOpen, toggleHiddenDeletePresetForm] =
    useToggle(false);

  const setNewPath = (path: string) => {
    navigate(path);
  };

  const refreshDaySummary = (): Promise<void> => {
    const dateStr = DateUtils.parseDate(date);
    setNewPath(`/foodDiary?date=${dateStr}`);

    return dayService.getSummary(date).then(setDaySummary);
  };

  const getAllPreset = async (): Promise<void> => {
    presetService.getAll().then(setAllPreset);
  };

  useEffect(() => {
    refreshDaySummary();
    getAllPreset();
  }, [date]);

  const changeCurrentDate = (daysToAdd: number): void => {
    const newDate = DateUtils.addDays(date, daysToAdd);
    setDate(newDate);
  };

  const saveNewMeal = async (name: string) => {
    const dateStr = DateUtils.parseDate(date);
    await mealService.create(name, dateStr);

    refreshDaySummary();
  };

  const updateMealName = async (
    id: number,
    inputValue: string
  ): Promise<void> => {
    await mealService.updateName(id, inputValue);

    refreshDaySummary();
  };

  const deleteMeal = async (id: number): Promise<void> => {
    await mealService.remove(id);

    refreshDaySummary();
  };

  const deleteAllFoodPortionOfMeal = async (id: number): Promise<void> => {
    await foodPortionService.removeByMealId(id);

    refreshDaySummary();
  };

  const updateFoodPortionQty = async (
    id: number,
    inputValue: string
  ): Promise<void> => {
    const parsedInput = Number(inputValue);
    await foodPortionService.update(id, parsedInput);

    refreshDaySummary();
  };

  const deleteFoodPortionRow = async (id: number): Promise<void> => {
    await foodPortionService.remove(id);

    refreshDaySummary();
  };

  const updateDayPreset = async (newPresetId: number): Promise<void> => {
    await dayPresetService.update(date, newPresetId);

    refreshDaySummary();
  };

  const createNewPreset = async (newPreset: NewPresetDto): Promise<void> => {
    const createdPreset = await presetService.create(newPreset);

    updateDayPreset(createdPreset.id);
    getAllPreset();
  };

  const updatePreset = async (
    id: number,
    newPreset: NewPresetDto
  ): Promise<void> => {
    await presetService.update(id, newPreset);

    refreshDaySummary();
    getAllPreset();
  };

  const deletePreset = async (id: number): Promise<void> => {
    await presetService.remove(id);

    refreshDaySummary();
    getAllPreset();
  };

  if (daySummary === undefined)
    return (
      <Loading>
        <Icon img={IconImg.Loading} />
      </Loading>
    );
  if (allPreset === undefined)
    return (
      <Loading>
        <Icon img={IconImg.Loading} />
      </Loading>
    );

  const handlePresetChange = async (
    evt: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    const parsedValue = Number(evt.currentTarget.value);
    await updateDayPreset(parsedValue);

    refreshDaySummary();
  };

  const { meals, preset, totalMacros, macrosLeft } = daySummary;

  return (
    <StyledFoodDiary>
      <DateHeader
        date={date}
        onPrev={() => changeCurrentDate(-1)}
        onNext={() => changeCurrentDate(1)}
      />

      <ContentWrapper>
        <MacroLabels />
        {meals.map((meal) => (
          <Meal
            meal={meal}
            updateMealName={updateMealName}
            deleteMeal={deleteMeal}
            deleteAllFoodPortion={deleteAllFoodPortionOfMeal}
            updateFoodPortion={updateFoodPortionQty}
            deleteFoodPortion={deleteFoodPortionRow}
            pushToHistory={setNewPath}
          />
        ))}

        <StyledButtonWrapper>
          {meals.length <= 5 && (
            <Button
              color={ButtonColor.DarkGreen}
              variant={ButtonVariant.AddMeal}
              size={ButtonSize.Medium}
              onClick={toggleHiddenAddNewMealForm}
            >
              Add new meal
            </Button>
          )}
        </StyledButtonWrapper>

        <div>
          <StyledDropdownPreset>
            <Icon
              img={IconImg.Add}
              color={IconColor.Burgundy}
              variant={IconVariant.NoHover}
              margin={{ marginLeft: 5 }}
              onClick={toggleHiddenAddPresetForm}
            />
            <Icon
              img={IconImg.Edit}
              color={IconColor.Burgundy}
              variant={IconVariant.NoHover}
              margin={{ marginLeft: 5 }}
              onClick={toggleHiddenEditPresetForm}
            />

            {allPreset.length > 1 && (
              <Icon
                img={IconImg.Remove}
                color={IconColor.Burgundy}
                variant={IconVariant.NoHover}
                margin={{ marginLeft: 5 }}
                onClick={toggleHiddenDeletePresetForm}
              />
            )}

            <StyledSelect value={preset.id} onChange={handlePresetChange}>
              {allPreset.map((preset) => (
                <option id={preset.id.toString()} value={preset.id}>
                  {preset.name}
                </option>
              ))}
            </StyledSelect>
          </StyledDropdownPreset>
          <DayFooter
            dayGoals={preset}
            totalMacros={totalMacros}
            macrosLeft={macrosLeft}
          />
          <MacroLabels />
        </div>
      </ContentWrapper>

      <AddNewMeal
        save={saveNewMeal}
        toggleOpen={toggleHiddenAddNewMealForm}
        isHiddenFormOpen={isHiddenAddNewMealFormOpen}
      />

      <AddPreset
        save={createNewPreset}
        toggleOpen={toggleHiddenAddPresetForm}
        isHiddenFormOpen={isHiddenAddPresetFormOpen}
      />
      <EditPreset
        currentPreset={preset}
        edit={updatePreset}
        toggleOpen={toggleHiddenEditPresetForm}
        isHiddenFormOpen={isHiddenEditPresetFormOpen}
      />
      <DeletePreset
        currentPreset={preset}
        remove={deletePreset}
        toggleOpen={toggleHiddenDeletePresetForm}
        isHiddenFormOpen={isHiddenDeletePresetFormOpen}
      />
    </StyledFoodDiary>
  );
};

export default FoodDiary;
