import React, {useEffect, useState} from 'react';



const Dima = () => {
    const [users, setUsers] = useState([])
    const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/posts/11")
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
                                            
                                             
                       
                        
                        </li>
                        
                                       
                </ul>
     
    </div>
  )
}
   

  
  export default Dima;
  