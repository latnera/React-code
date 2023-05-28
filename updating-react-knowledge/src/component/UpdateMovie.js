import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Movcontext } from "../App";
import { number } from "prop-types";

const UpdateMovie = () => {
  let { idObj } = useParams();
  let toNumId = JSON.parse(idObj);
  let Context = useContext(Movcontext);
  let [state, setState] = useState({
    id: "",
    name: "",
    rate: "",
    kind: "",
    released: "",
    discrption: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    let comeObj = Context.data.find((ob) => ob.id === toNumId);
    setState(comeObj);
  }, []);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setState((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value
      };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    Context.dispatch({ type: "update", id: toNumId, updatedData: state });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.name} onChange={handleChange} name="name" />
        <input type="text" value={state.rate} onChange={handleChange} name="rate" />
        <input type="text" value={state.kind} onChange={handleChange} name="kind" />
        <input type="text" value={state.released} onChange={handleChange} name="released" />
        <input type="text" value={state.discrption} onChange={handleChange} name="discrption" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UpdateMovie;
