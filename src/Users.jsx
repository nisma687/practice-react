import { useEffect, useState } from "react"

export default function Users(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))


    },[])
    
    return (
        <div>
            <h1>Users:{users.length}</h1>
           

        </div>
    )
}



// declare a state to hold the data
// useEffect to load the data with call back and dependecy array
// use fetch to load the data

