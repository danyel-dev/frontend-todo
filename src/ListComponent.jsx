import ItemComponent from "./ItemComponent";

export default function ListComponent(props) {
    return (
        <div>
            <h1>{props.listName}</h1>
            <ul>
                <ItemComponent name={"Item 1"} />
            </ul>
        </div>
    );
}
