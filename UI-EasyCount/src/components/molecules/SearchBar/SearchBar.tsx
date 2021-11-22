import { useInputState } from "../../../hooks/useInputState";
import { FoodDto } from "../../../services/foodService";
import Icon from "../../atoms/Icons/Icon";
import { IconImg } from "../../atoms/Icons/Icon.types";
import Input from "../../atoms/Inputs/Input";
import { InputType } from "../../atoms/Inputs/Input.types";
import { IconWrapper, InputWrapper, StyledSearchBar } from "./SearchBar.styles";

interface SearchBarProps {
  setAllFood: React.Dispatch<React.SetStateAction<FoodDto[] | undefined>>;
  searchByName: (searchTerm: string) => void;
  toggleIsSearching: () => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { searchByName, toggleIsSearching } = props;
  const [inputValue, handleChange, reset] = useInputState("");

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (inputValue.trim() === "") {
      reset();
    } else {
      searchByName(inputValue);
      toggleIsSearching();
      reset();
    }
  };

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          label={InputType.Search}
          inputValue={inputValue}
          onChange={handleChange}
        />
      </InputWrapper>
      <IconWrapper>
        <Icon img={IconImg.Search} />
      </IconWrapper>
    </StyledSearchBar>
  );
};

export default SearchBar;
