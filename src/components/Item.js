class Item
{
    static lastId = 0;

    constructor(text)
    {
        this.text = text;
        this.id = Item.lastId+=1;
        this.done = false;
    }
}

export default Item;