import ListComponent from "../components/ListComponent";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
    const [lists, setlists] = useState([])

    useEffect(() => {
        async function fetchLists() {
            const config = {
                headers: {
                    "Content-Type": "Application/Json",
                    "Authorization": "Token " + localStorage.getItem('token')
                }
            }

            const url = 'http://127.0.0.1:8000/list/'
            var { data } = await axios.get(url, config)
            setlists(data)
        }

        fetchLists()
    }, [lists])

    return (
        <div>
            {lists.map(list =>
                <ListComponent key={list.id} list={list} />
            )}
        </div>
    );
}
