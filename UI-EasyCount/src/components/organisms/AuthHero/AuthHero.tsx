import {
  ImgListWrapper,
  ImgWrapper,
  StyledImg,
  Subtitle,
  Title,
} from "./AuthHero.styles";
import goalSrc from "../../../images/goal.png";
import dbSrc from "../../../images/database.png";
import trackSrc from "../../../images/track.png";

const AuthHero = () => {
  return (
    <div>
      <Title>Easy Count</Title>
      <Subtitle>Your calories count diary</Subtitle>
      <ImgListWrapper>
        <ImgWrapper>
          <StyledImg src={goalSrc} />
          <span>Control and choose your daily nutrient goals</span>
        </ImgWrapper>
        <ImgWrapper>
          <StyledImg src={trackSrc} />
          <span>Track your calories and macronutrients intakes</span>
        </ImgWrapper>
        <ImgWrapper>
          <StyledImg src={dbSrc} />
          <span>Add your own food to our dabatase</span>
        </ImgWrapper>
      </ImgListWrapper>
    </div>
  );
};

export default AuthHero;
