import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOpertations from "./components/redux/auth/auth-operations";
import authSelectors from "./components/redux/auth/auth-selectors";
import "./App.css";
import AppBarComponent from "./components/AppBar";
import { Switch } from "react-router-dom";
import HomeView from "./components/views/HomeViews";
import LoginView from "./components/views/LoginView";
import RegisterView from "./components/views/RegisterView";
import ContactsView from "./components/views/ContactsView";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

export default function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getisFetchingUser);

  useEffect(() => {
    dispatch(authOpertations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingUser && (
      <div>
        <AppBarComponent />
        <div className="App">
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/register"
                component={RegisterView}
                restricted
              />
              <PublicRoute path="/login" component={LoginView} restricted />
              <PrivateRoute path="/contacts" component={ContactsView} />
            </Suspense>
          </Switch>
        </div>
      </div>
    )
  );
}
