import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organisms/NavBar/Navbar";
import Page from "./components/templates/Page";
import AddFood from "./components/pages/AddFoodPage/AddFood";
import Login from "./components/pages/AuthPages/Login";
import SignUp from "./components/pages/AuthPages/SignUp";
import Preset from "./components/pages/PresetPage/Preset";
import FoodDiary from "./components/pages/FoodDiaryPage/FoodDiary";
import NotFound from "./components/pages/NotFoundPage/NotFound";

export default function EasyCountApp() {
  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={
            <Page>
              <Navbar signup />
              <SignUp />
            </Page>
          }
        />
        <Route
          path="/login"
          element={
            <Page>
              <Navbar login />
              <Login />
            </Page>
          }
        />
        <Route
          path="/preset"
          element={
            <Page>
              <Navbar />
              <Preset />
            </Page>
          }
        />
        <Route
          path="/foodDiary"
          element={
            <Page>
              <Navbar />
              <FoodDiary />
            </Page>
          }
        />
        <Route
          path="/food"
          element={
            <Page>
              <Navbar />
              <AddFood />
            </Page>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
