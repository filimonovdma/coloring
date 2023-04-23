import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom"

const Dima = () => {
    let {slug} = useParams()
    const [users, setUsers] = useState({})
    
    const fetchData = async () => {
        const response = await fetch("http://localhost:8000/api2/pages/dima/")
        const data = await response.json()
        setUsers(data)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    const fullUrlObject = users.body && users.body && users.body.find(item => item.type === 'image_text');
    const fullUrl = fullUrlObject && fullUrlObject.value.image.url;

    return (
        <div>
            <ul>        
                <li key={users.id}>
                    {users.title} @ {users.meta && users.meta.slug}
                    <h3>ID: </h3>
                    <p>{users.body && users.body[2].value.image.url}</p>   
                    lbf
                   
                    {fullUrl && <p>{fullUrl}</p>}
                </li>                        
            </ul>
        </div>
    )
}
export default Dima