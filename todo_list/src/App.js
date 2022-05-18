import React from 'react';
import { useState } from 'react';
import './app.css';

function App(){
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isModified, setIsModified] = useState(false);

  //add Item
  function addItem(){
    if(!newItem){
      alert("Enter an Item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    if(isModified){
      items.splice(window.index, 1);
      items.splice(window.index, 0, item);
      setNewItem("");
      setIsModified(false);
    }
    else{
      setItems(oldList => [...oldList, item]);
      setNewItem("");
    }
  }
  //delete item
  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  function modify(id, value){
    setNewItem(value);
    setIsModified(true);
    window.index = items.findIndex(item => item.id == id);
  }
  
  //completed task
  function handlecomplete(id, value){
    
  }

  return(
    <div className='container'>
      <div className='under_container'>
        <h1>To Do List</h1>

        <div className='input_container'>
          <input
            type="text"
            placeholder='Add an item ...'
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
          <button onClick={() => addItem()}>Add</button>
        </div>

        <ul>
          {items.map(item => {
            return(
              <div className='item'><li key={item.id}>{item.value}</li><button onClick={() => modify(item.id, item.value)}>Modify</button><button onClick={() => deleteItem(item.id)}>X</button></div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;