import { useEffect } from "react";
import { useState } from "react";
import ListComponent from "./ListComponent";
import axios from 'axios';


export default function UserLists() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token')
            }
        }

        const url = "http://127.0.0.1:8000/lists/"
        axios.get(url, config).then(response => setLists(response.data)) 
    }, [])

    return(
        <div>
            { lists.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set} />) }
        </div>
    );
}
