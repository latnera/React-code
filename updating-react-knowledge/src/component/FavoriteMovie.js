import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

let FavoriteMovie = ({ object }) => {
  // let [state, setState] = useState([]);
  console.log(object);

  return (
    <div className="App">
      <h1>Favorite component</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default FavoriteMovie;
