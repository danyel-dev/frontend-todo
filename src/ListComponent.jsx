import ItemComponent from "./ItemComponent";

export default function ListComponent(props) {
    return (
        <div>
            <h1>{props.listName}</h1>
            <ul>
                {props.items.map(item => <ItemComponent key={item.id} name={item.name} />)}
            </ul>
        </div>
    );
}
