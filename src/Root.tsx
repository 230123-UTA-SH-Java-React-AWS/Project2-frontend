import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Game from "./components/GameScreen/GameTable/Game";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import UndefLoadScreen from "./components/UndefinedLoginScreen/UndefLoadScreen";
import { autoLogin } from "./features/authSlice";
import { fetchCsrfToken } from "./features/csrfSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { getJwt } from "./util/getJwt";

export const Root = () => {
  const dispatch = useAppDispatch();
  const csrfToken = useAppSelector((state: RootState) => state.csrf.token);
  const loggedIn = useAppSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!csrfToken) {
      dispatch(fetchCsrfToken());
    }
  }, [dispatch, csrfToken]);

  useEffect(() => {
    if (getJwt() != null) {
      dispatch(autoLogin());
    }
  }, []);

  console.log("This component now exists");
  
  return (
    <BrowserRouter>
      {loggedIn !== undefined ? <Routes>
        <Route path="/app" element={loggedIn? <App /> : <Navigate replace to={"/login"}/>}/>
        <Route path='/blackjack/:tableId' element={loggedIn? <Game /> : <Navigate replace to={"/login"}/>} />
        <Route path="/" element={loggedIn? <Navigate replace to={"/app"}/> : <Landing />} />
        <Route path="/registration" element={loggedIn? <Navigate replace to={"/app"}/> :<Registration />} />
        <Route path="/login" element={loggedIn? <Navigate replace to={"/app"}/> :<Login />} />
        <Route path="/*" element={loggedIn? <Navigate replace to={"/app"}/> : <Navigate replace to={"/login"}/>}/>
      </Routes> : 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<UndefLoadScreen />}/>
      </Routes>
      }
    </BrowserRouter>
  );
};
