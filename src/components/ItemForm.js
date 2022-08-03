import React, {useState} from "react";
 import { v4 as uuid } from "uuid";

 function ItemForm({onItemFormSubmit}) {

   const [newItemName, setNewItemName] = useState("")
   const [newItemCategory, setNewItemCategory] = useState("Produce")

   function addNewItemName(event){
     setNewItemName(event.target.value)
   }
   function addNewItemCategory(event){
     setNewItemCategory(event.target.value)
   }
   function submitItem(event){
     event.preventDefault()
     onItemFormSubmit({
       id: uuid(),
       name: newItemName,
       category: newItemCategory,
     })
   }
   return (
     <form className="NewItem" onSubmit={submitItem}>
       <label>
         Name: 
         <input type="text" name="name" value={newItemName} onChange={addNewItemName}/>
       </label>

       <label>
         Category:
         <select name="category" value={newItemCategory} onChange={addNewItemCategory}>
           <option value="Produce">Produce</option>
           <option value="Dairy">Dairy</option>
           <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}
export default ItemForm