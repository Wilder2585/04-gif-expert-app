import React, { useState } from 'react'

const AddCategory = ( { onNewCategory, setCategories, currentCategories } ) => {
 
 const [inputValue, setInputValue] = useState('')
 
 const onInputChange = (event) => {
     setInputValue(event.target.value);
   
 }

 const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
   
    //setCategories((categories) => [...categories,  inputValue])
    onNewCategory(inputValue.trim());
   
    setInputValue('');
 }
    return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder='Buscar Gift'
            value={ inputValue}
            onChange={ onInputChange}
        />
       
    </form>
  )
}

export default AddCategory