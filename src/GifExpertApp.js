import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


function GifExpertApp() {
  
  const [ categories, setCategories ] = useState(['Dragon ball']);
  
  const onAddCategory = (newCategory) => {
   
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]); //dos formas para agregar en un array
     //setCategories( cate => [...cate, 'Valorant'])
  
  }
   
  return (
    <>

    <h1>Gif Expert App</h1>

    <AddCategory 
    
    onNewCategory={(event) => onAddCategory(event)}
  
    />

    {/* <button onClick={() => onAddCategory() }>Agregar</button> */}

    <ol>

      { 
        categories.map(  ( category )  => <GifGrid key={category} category={ category } />  )
      }

    </ol>
      
    </>
  );
}

export default GifExpertApp;
