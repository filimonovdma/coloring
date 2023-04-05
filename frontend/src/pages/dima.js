import React, {useEffect, useState,} from 'react';
import { useParams } from "react-router-dom"



const Dima = () => {
    let {slug} = useParams()
    const [users, setUsers] = useState([])
    const fetchData = async () => {
     
      const response = await fetch("http://localhost:8000/api/posts/"+slug)
      const data = await response.json()
      setUsers(data)
      }
    
      
   

  useEffect(() => {
    fetchData()
  }, [])


    return (
     
        <div>        
                          
                <ul>
                    
                        <li key={users.id}>{users.title} @ {users.slug}

                        <h3>ID: {slug}</h3>

                        <p>{users.header_image && users.header_image.url}</p>   
                        
                        </li>
                        
                                       
                </ul>
     
    </div>
  )
}
   

  
  export default Dima;
  