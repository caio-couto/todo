import {useState} from 'react'

function TodoForm({onAddItem})
{
    const [text, setText] = useState('');

    function handleChange(event)
    {
        let inputText = event.target.value;
        setText(inputText);
        
    }

    function addItem(event)
    {
        event.preventDefault();
        if(text)
        {
            onAddItem(text);
            setText('');
        }

    }

    return(
        <form>
            <input onChange={handleChange} type='text' value={text}/>
            <button onClick={addItem}>Add</button>
        </form>
    );
}

export default TodoForm;