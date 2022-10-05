import {BsFillTrashFill, BsCheckCircle, BsCheckCircleFill} from 'react-icons/bs';
import Card from './Card';


function ListItem({item, onItemDeleted, onDone})
{
    function DoneImg({done})
    {
        if(done)
        {
            return (<BsCheckCircleFill/>)
        }
        else
        {
            return (<BsCheckCircle/>)
        }
    }


    return(
        <li>
            <Card className={item.done? 'done item' : 'item'}>
                {console.log(item)}
                {item.text}
                <div>
                    <button onClick={() => {onDone(item)}}>{<DoneImg done={item.done}/>}</button>
                    <button onClick={() => {onItemDeleted(item)}}>
                        <BsFillTrashFill/>
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default ListItem;