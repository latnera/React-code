import React, { useState, useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import FavMov from "./FavoriteMovie";
import { Movcontext } from "../App";
//export

const Movies = () => {
  const [state, setState] = useState({});

  let Context = useContext(Movcontext);
  const navigate = useNavigate();

  let handleDetails = (idObj) => {
    navigate(`details/${idObj}`);
  };

  let handleUpdate = (idObj) => {
    navigate(`update/${idObj}`);
  };
  let handleAddFav = (obj) => {
    // <FavMov object={state} />;
    setState(obj);
  };

  return (
    <div className="App">
      {Context.data.map((obj, i) => {
        return (
          <div key={i} className="container">
            <p>Name: {obj.name}</p>

            <p>Rate: {obj.rate}</p>
            <div className="btndisplayHorz">
              <button type="button" className="button" onClick={() => handleDetails(obj.id)}>
                Details...
              </button>
              <button type="button" className="button" onClick={() => handleUpdate(obj.id)}>
                Update
              </button>
              <button type="button" className="button" onClick={() => Context.dispatch({ type: "delete", id: obj.id })}>
                Delete
              </button>
              <button type="button" className="button" onClick={() => handleAddFav(obj)}>
                Add to Favorite
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
