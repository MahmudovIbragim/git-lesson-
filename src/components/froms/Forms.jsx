import React, { useState } from "react";
import Button from "../ui/buttons/Button";
import Input from "../ui/inputs/Input";

const Forms = ({ movies, setMovies }) => {
  const [inputName, setInputName] = useState("");
  const [inputImg, setInputImg] = useState("");

  const handleAdd =() => {
    const newMovieList = {
      id:Math.random(),
      name:inputName,
      img:inputImg,
    }
    setMovies([...movies, newMovieList])
    
    setInputName("")
    setInputImg("")
  }


  return (
    <div>
      <Input value={inputName} text={'name'} setData={setInputName}/>
      <Input value={inputImg} text={'img'} setData={setInputImg}/>
      <Button onClick={handleAdd} nameBtn={"add"} />
    </div>
  );
};
 export default Forms;
