import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Movcontext } from "../App";
import { number } from "prop-types";

const DetailsMovie = () => {
  let { idObj } = useParams();
  let toNumId = JSON.parse(idObj);
  let Context = useContext(Movcontext);
  let comeObj = Context.data.find((ob) => ob.id === toNumId);
  let [state, setState] = useState(comeObj);

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="container">
        <p>Name: {state.name}</p>
        <p>Rate: {state.rate}</p>
        <p>Kind: {state.kind}</p>
        <p> Released date: {state.released}</p>
        <p>Discription: {state.discrption}</p>
        <Link to="/">Go back to Movies...</Link>
      </div>
    </div>
  );
};

export default DetailsMovie;
