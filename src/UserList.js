//liste of users
import React,{useEffect,useState} from "react";
import axios from "axios";
  // fetch
const UserList=()=>{
    const [listOfUser,setlistOfUser]= useState([]);
    useEffect(()=>{
        const fetchUsers= async()=>
        {
            try{
                const response= await axios.get('https://jsonplaceholder.typicode.com/users')
                setlistOfUser(response.data);

            }
            catch(error){
                console.error('Error fetching users:',error);
            }
        }
        fetchUsers();
    },
    
    []);
    // list
    return(
        <div>
            <h2> List of Users</h2>
            <ul>
            { listOfUser.map (user=>(
                <li Key={ user.id}> {user.name}</li>
            ))}
            </ul>

        </div>
    )
    

}
export default UserList