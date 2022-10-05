import React, { useEffect, useState } from 'react';
import './App.css'
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import Modal from './components/Modal';

const SAVED_ITEMS = 'savedItems';

function Todo()
{
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() =>
    {
        let savedItems = JSON.parse(localStorage.getItem('savedItems'));
        if(savedItems)
        {
            setItems(savedItems);
        }
    }, [])

    useEffect(() =>
    {
        localStorage.setItem('savedItems', JSON.stringify(items));
    }, [items])

    function onAddItem(text)
    {
        let item = new Item(text);
        setItems([...items, item])
        onHideModal();
    }

    function onItemDeleted(item)
    {
        console.log(item);
        let filteredItens = items.filter((filtered) => filtered.id != item.id);
        setItems(filteredItens);
    }

    function onDone(item)
    {
        let updatedItems = items.map((element) =>
        {
            if(element.id === item.id)
            {
                element.done = !element.done;
            }
            return element;
        })
        setItems(updatedItems);
    }

    function onHideModal()
    {
        setShowModal(false);
    }

    return(
        <div className='container'>
            
            <header className='header'>
                <h1>Todo</h1>
                <button onClick={() => {setShowModal(true)}} className='addButton'>+</button>
            </header>
            
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}/>
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}/></Modal>
        </div>
    );
}

export default Todo;