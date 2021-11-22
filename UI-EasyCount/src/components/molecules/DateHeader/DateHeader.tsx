import { HeaderWrapper, HeaderText, HeaderButton } from "./DateHeader.styles";
import Icon from "../../atoms/Icons/Icon";
import { IconColor, IconImg, IconVariant } from "../../atoms/Icons/Icon.types";

type DateProps = {
  onPrev: () => void;
  onNext: () => void;
  date: Date;
};

export default function DateHeader(dateProps: DateProps) {
  const { onPrev, onNext, date } = dateProps;
  const currentDateStr = date.toUTCString().slice(0, 16);

  return (
    <HeaderWrapper>
      <HeaderButton prev onClick={onPrev}>
        <Icon
          img={IconImg.NavPrev}
          color={IconColor.White}
          variant={IconVariant.NoHover}
        />
      </HeaderButton>
      <HeaderText>{currentDateStr}</HeaderText>
      <HeaderButton next onClick={onNext}>
        <Icon
          img={IconImg.NavNext}
          color={IconColor.White}
          variant={IconVariant.NoHover}
        />
      </HeaderButton>
    </HeaderWrapper>
  );
}
