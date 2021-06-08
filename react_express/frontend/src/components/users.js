import React, {useState, useEffect} from "react";

// Exporting the components
export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("/users/").then(res => {
          if(res.ok) { 
              return res.json();
            } 
        }).then(jsonRes => setUsers(jsonRes.usersList))
    })

    // return(<li>users.map(user=>user)</li>)

    return( <div>
        {users.map(user => <li>{user}</li>)}
         </div> )
};