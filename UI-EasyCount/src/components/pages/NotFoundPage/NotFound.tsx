import { Link } from "react-router-dom";
import { colors, fonts } from "../../../variables";

const NotFound = () => {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "4rem",
          fontFamily: `${fonts.adventPro}`,
          color: `${colors.darkBurgundy}`,
        }}
      >
        Page Not Found
      </h1>
      <Link
        to="/preset"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "4rem",
          color: `${colors.darkerGreen}`,
          fontWeight: 500,
        }}
      >
        Create your first Preset Goal
      </Link>
      <Link
        to="/foodDiary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "4rem",
          color: `${colors.darkerGreen}`,
          fontWeight: 500,
        }}
      >
        Go to today's Food Diary
      </Link>
    </div>
  );
};

export default NotFound;
