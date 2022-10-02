function List({items, onItemDeleted})
{
    return(
        <ul>
            {items.map((item) =>
            (
                <li key={item.id}>
                    {item.text}
                    <button onClick={() => {onItemDeleted(item)}}>Excluir</button>
                </li>
            ))}
        </ul>
    );
}

export default List;