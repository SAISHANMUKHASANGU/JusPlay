import axios from 'axios'
import { useState,useEffect } from 'react'
import User from './user'


let API_URL="http://localhost:3000/users"

function Form() {

    
    const [users,setUsers]=useState([])
    const [newuser,setNewUser]=useState({
        email:"",
        name:"",
        favorite_game:"",
        password:""
    })

    const [editUser, setEditUser] = useState(null);


    

    useEffect(() => {
           fetchdata()
    }, []);

    const fetchdata = async () => {
        try {
          const response = await axios.get(API_URL);
          setUsers(response.data);
          console.log(response.data)
        } catch (error) {
          console.log("Error fetching patient", error);
        }
      };

    const deleteUser=async (id)=>
    {
        try{
            console.log("hi")
            let response=await axios.delete(`${API_URL}/${id}`)
            setUsers(users.filter((user)=>user.id!==id))
            fetchdata()

        }
        catch(error)
        {
            console.log("error deleting patient", error);
        }
    }

    

    const addUser=async (event)=>{

        event.preventDefault()

        try{
            
            const response=await axios.post(API_URL,newuser)
            setUsers([...users,response.data])
            setNewUser({name:"",email:"",favorite_game:"",password:""})

            
        }
        catch(error){
            console.log("Error adding patient",error);
        }
    }

    const UpdateUser=async (event)=>{
        event.preventDefault()
        try {
            const response = await axios.put(
              `${API_URL}/${editUser.id}`,
              editUser
            );
            setUsers(
              users.map((user) =>
                user.id === response.data.id ? response.data : user
              )
            );
            setEditUser(null);
          } catch (error) {
            console.log("error updating patient", error);
          }
    }

  return (
    <>
        <div id="form">

            <form id="searchingform">
                <input type="Email" value={newuser.email} onChange={(e)=>setNewUser({...newuser,email:e.target.value})} placeholder='Email'/>
                <input type="text" value={newuser.name} onChange={(e)=>setNewUser({...newuser,name:e.target.value})} placeholder="Username"/>
                <input type="text" value={newuser.favorite_game} onChange={(e)=>setNewUser({...newuser,favorite_game:e.target.value})} placeholder='Favorite game' />
                <input type="password" value={newuser.password} onChange={(e)=>setNewUser({...newuser,password:e.target.value})} placeholder="Password"/>
                <button type="submit" onClick={addUser}>Submit</button>
            </form>
        </div>
        {editUser &&(<div>
            <p>Editing form</p>
                <form action="">
                <input type="Email" value={editUser.email} onChange={(e)=>setEditUser({...editUser,email:e.target.value})} placeholder='Email'/>
                <input type="text" value={editUser.name} onChange={(e)=>setEditUser({...editUser,name:e.target.value})} placeholder="Username"/>
                <input type="text" value={editUser.favorite_game} onChange={(e)=>setEditUser({...editUser,favorite_game:e.target.value})} placeholder='Favorite game' />
                <input type="password" value={editUser.password} onChange={(e)=>setEditUser({...editUser,password:e.target.value})} placeholder="Password"/>
                <button type="submit" onClick={UpdateUser}>Submit</button>
                    
                </form>
                
        </div>)
        }
        <div>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onEdit={setEditUser}
            onDelete={deleteUser}
          />
        ))}
      </div>
    </>
  )
}

export default Form