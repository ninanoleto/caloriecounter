import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToggle } from "../../../hooks/useToggle";
import {
  foodPortionService,
  NewFoodPortionDto,
} from "../../../services/foodPortionService";
import {
  FoodDto,
  foodService,
  NewFoodDto,
} from "../../../services/foodService";
import { MealDto, mealService } from "../../../services/mealService";
import ButtonBack from "../../atoms/Buttons/ButtonBack/ButtonBack";
import ButtonSquare from "../../atoms/Buttons/ButtonSquare/ButtonSquare";
import { ButtonSquareColor } from "../../atoms/Buttons/ButtonSquare/ButtonSquare.types";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import AddCheckedForm from "../../organisms/AddCheckedForm/AddCheckedForm";
import NewFoodModal from "../../organisms/Modals/NewFoodModal/NewFoodModal";
import NutriInfoModal from "../../organisms/Modals/NutriInfoModal/NutriInfoModal";
import { Loading } from "../FoodDiaryPage/FoodDiary.styles";
import {
  ButtonWrapper,
  BoxWrapper,
  StyledAddFood,
  Title,
  ContentWrapper,
} from "./AddFood.styles";
import Icon from "../../atoms/Icons/Icon";
import { IconImg } from "../../atoms/Icons/Icon.types";

const AddFood = () => {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const mealId = searchParams.get("meal");

  const [meal, setMeal] = useState<MealDto>();
  const [allFoods, setAllFoods] = useState<FoodDto[]>();
  const [currentFood, setCurrentFood] = useState<FoodDto>();

  const [isSearching, toggleIsSearching] = useToggle(false);
  const [isNutriModalOpen, toggleNutriModal] = useToggle(false);
  const [isNewFoodModalOpen, toggleNewFoodModal] = useToggle(false);

  const refreshMeal = async (): Promise<void> =>
    mealService.get(Number(mealId)).then(setMeal);

  const refreshAllFoods = async (): Promise<void> =>
    foodService.getAll().then(setAllFoods);

  useEffect(() => {
    refreshMeal();
    refreshAllFoods();
  }, []);

  const back = (): void => navigate(-1);

  const chooseGoBack = (): void => {
    if (isSearching) {
      toggleIsSearching();
      refreshAllFoods();
    } else {
      back();
    }
  };

  if (meal === undefined)
    return (
      <Loading>
        <Icon img={IconImg.Loading} />
      </Loading>
    );

  const createMany = async (
    allFoodPortion: NewFoodPortionDto[]
  ): Promise<void> => {
    await foodPortionService.createMany(allFoodPortion);

    refreshAllFoods();
  };

  const searchFoodByName = async (name: string): Promise<void> =>
    foodService.getByName(name).then(setAllFoods);

  const addNewFood = async (newFood: NewFoodDto) => {
    await foodService.create(newFood);

    refreshAllFoods();
  };

  const deleteFood = async (id: number): Promise<void> => {
    await foodService.remove(id);

    refreshAllFoods();
  };

  return (
    <StyledAddFood>
      <Title>
        Add food to <span>{meal.name}</span>
      </Title>
      <BoxWrapper>
        <ButtonBack
          goBack={chooseGoBack}
          margin={{ margin: [-15, 0, 0, -40] }}
        />
        <ContentWrapper>
          {allFoods !== undefined && allFoods.length > 0 && (
            <SearchBar
              setAllFood={setAllFoods}
              searchByName={searchFoodByName}
              toggleIsSearching={toggleIsSearching}
            />
          )}
          <AddCheckedForm
            allFood={allFoods}
            mealId={meal.id}
            goBack={back}
            toggleModal={toggleNutriModal}
            createMany={createMany}
            setCurrentFood={setCurrentFood}
          />
          <ButtonWrapper>
            <ButtonSquare
              onClick={toggleNewFoodModal}
              color={ButtonSquareColor.Green}
              margin={{ marginTop: 40 }}
              flexStart
            >
              Create new Food
            </ButtonSquare>
          </ButtonWrapper>
        </ContentWrapper>
      </BoxWrapper>

      <NutriInfoModal
        food={currentFood}
        mealId={meal.id}
        isModalOpen={isNutriModalOpen}
        toggleModal={toggleNutriModal}
        chooseGoBack={chooseGoBack}
        addFoodPortionToMeal={createMany}
        deleteFoodFromDb={deleteFood}
      />

      <NewFoodModal
        isModalOpen={isNewFoodModalOpen}
        toggleModal={toggleNewFoodModal}
        addNewFood={addNewFood}
      />
    </StyledAddFood>
  );
};

export default AddFood;
