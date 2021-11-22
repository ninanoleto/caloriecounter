import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CheckIcon from "@material-ui/icons/Check";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SearchIcon from "@material-ui/icons/Search";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HourglassEmpty from "@material-ui/icons/HourglassEmpty";

import { StyledIcon, StyledIconEye } from "./Icon.styles";
import { IconColor, IconImg, IconVariant } from "./Icon.types";
import { MarginProps } from "../../shared/types.shared";

const iconIndex: Record<IconImg, JSX.Element> = {
  [IconImg.Edit]: <EditIcon />,
  [IconImg.Remove]: <DeleteForeverIcon />,
  [IconImg.Check]: <CheckIcon />,
  [IconImg.Add]: <AddCircleOutlineIcon />,
  [IconImg.Search]: <SearchIcon />,
  [IconImg.NavPrev]: <NavigateBeforeIcon />,
  [IconImg.NavNext]: <NavigateNextIcon />,
  [IconImg.Close]: <CloseIcon />,
  [IconImg.Back]: <ArrowBackIcon />,
  [IconImg.AddChecked]: <AddCircleIcon />,
  [IconImg.See]: <VisibilityIcon />,
  [IconImg.Loading]: <HourglassEmpty />,
};

interface IconProps {
  img: IconImg;
  color?: IconColor;
  variant?: IconVariant;
  margin?: MarginProps;
  onClick?: () => void;
}

const Icon = (props: IconProps) => {
  const { img, color, variant, margin, onClick } = props;

  const handleClick = () => {
    onClick !== undefined && onClick();
  };

  return img === IconImg.See ? (
    <StyledIconEye
      color={color || IconColor.Black}
      variant={variant || IconVariant.Hover}
      margin={margin || {}}
      onClick={handleClick}
    >
      {iconIndex[img]}
    </StyledIconEye>
  ) : (
    <StyledIcon
      color={color || IconColor.Black}
      variant={variant || IconVariant.Hover}
      margin={margin || {}}
      onClick={handleClick}
    >
      {iconIndex[img]}
    </StyledIcon>
  );
};

export default Icon;
