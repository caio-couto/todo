import React, { useState } from 'react';
import './App.css'
import List from './List';
import TodoForm from './TodoForm';
import Item from './Item';

function Todo()
{
    const [items, setItems] = useState([]);

    function onAddItem(text)
    {
        let item = new Item(text);
        setItems([...items, item])
    }

    function onItemDeleted(item)
    {
        console.log(item);
        let filteredItens = items.filter((filtered) => filtered.id != item.id);
        setItems(filteredItens);
    }

    return(
        <div className='container'>
            <h1>Todo</h1>
            <TodoForm onAddItem={onAddItem}/>
            <List onItemDeleted={onItemDeleted} items={items}/>
        </div>
    );
}

export default Todo;