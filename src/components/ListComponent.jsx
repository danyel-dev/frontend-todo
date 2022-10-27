import ItemComponent from './ItemComponent'


export default function ListComponent({ list }) {
    return (
        <div>
            <h2>{list.name}</h2>

            <ul>
                {list.item_set.map(item => <ItemComponent key={item.id} item={item}></ItemComponent> )}
            </ul>
        </div>
    );
}
