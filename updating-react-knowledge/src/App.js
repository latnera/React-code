import React, { useState, createContext, useReducer } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

//import Component
import Details from "./component/Details";
import FavoriteMovie from "./component/FavoriteMovie";
import Movie from "./component/Movies";
import UpdateMovie from "./component/UpdateMovie";
// import NavbarComp from "./compo/NavbarComp";
// import Dashboard from "./compo/Dashboard";
import Error from "./component/Error";
import arr from "./component/List";

export const Movcontext = createContext();

let reducer = (state, action) => {
  switch (action.type) {
    case "delete": {
      return state.filter((user) => user.id !== action.id);
    }
    case "update": {
      let updated = state.map((user) => {
        if (user.id === action.id) {
          return action.updatedData;
        } else {
          return user;
        }
      });
      console.log(updated);
      return updated;
    }

    default: {
      return state;
    }
  }
};
export default function App() {
  let [data, dispatch] = useReducer(reducer, arr);

  return (
    <Movcontext.Provider value={{ data: data, dispatch: dispatch }}>
      <Link to="/favorite">Fav</Link>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/update/:idObj" element={<UpdateMovie />} />
        <Route path="/details/:idObj" element={<Details />} />
        <Route path="/favorite" element={<FavoriteMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Movcontext.Provider>
  );
}
