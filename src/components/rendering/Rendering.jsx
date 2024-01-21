import React from "react";
import MapingRender from "../mapinRender/MapingRender";

const Rendering = ({ movies }) => {
  return (
    <div>
      {movies.map((id, name, img) => {
        return <MapingRender id={id} name={name} img={img} />;
      })}
    </div>
  );
};

export default Rendering;
