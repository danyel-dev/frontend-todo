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
                'Authorization': 'Token 012b3fc49f18a37887ea631cb4326313bff76442'
            }
        }

        const url = "http://127.0.0.1:8000/lists/"
        axios.get(url).then(response => setLists(response.data)) 
    }, [])

    return(
        <div>
            { lists.map(list => <ListComponent listName={list.name} />) }
        </div>
    );
}
