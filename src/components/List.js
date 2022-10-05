import ListItem from './ListItem';


function List({items, onItemDeleted, onDone})
{

    return(
        <ul>
            {items.map((item) => <ListItem key={item.id} item={item} onDone={onDone} onItemDeleted={onItemDeleted}/>)}
        </ul>
    );
}

export default List;