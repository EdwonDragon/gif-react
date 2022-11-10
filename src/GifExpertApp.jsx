import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        onNewCategory={onAddCategory}
        // setCategories={setCategories}
      />

      {/* Listado de gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {/* Gif Item */}
      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}

    </>
  );
};
