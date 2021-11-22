import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route
          exact
          path="/signup"
          render={(routeProps) => (
            <Page>
              <Navbar signup />
              <SignUp {...routeProps} />
            </Page>
          )}
        />
        <Route
          exact
          path="/login"
          render={(routeProps) => (
            <Page>
              <Navbar login />
              <Login {...routeProps} />
            </Page>
          )}
        />
        <Route
          exact
          path="/preset"
          render={(routeProps) => (
            <Page>
              <Navbar />
              <Preset {...routeProps} />
            </Page>
          )}
        />
        <Route
          exact
          path="/foodDiary"
          render={(routeProps) => (
            <Page>
              <Navbar />
              <FoodDiary {...routeProps} />
            </Page>
          )}
        />
        <Route
          exact
          path="/food"
          render={(routeProps) => (
            <Page>
              <Navbar />
              <AddFood {...routeProps} />
            </Page>
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
