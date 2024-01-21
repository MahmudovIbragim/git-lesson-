import React, { useState } from "react";
import Forms from "../froms/Forms";
import Rendering from "../rendering/Rendering";

const OrderBasket = () => {
  const [movies, setMovies] = useState([])

  return <div>
    <Forms movies={movies} setMovies={setMovies} />
    <Rendering movies={movies}/>
  </div>;
};

export default OrderBasket;
