import React, { useState } from 'react'
import {userData} from '../../data/index' 
import Add from './Add'
import Header from './Header'
import List from './List'
import './Dashboard.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




function Dashboard() {
    const [user, setUser] = useState(userData);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
   

    const handleEdit = (id) => {
        const [use] = user.filter(use => use.id === id);
        console.log("HEllo This is edit");
        setSelectedUser(use)
        setIsEditing(true)
    }
    const handleDelete = (id) => {
        
        const [use] = user.filter(use => use.id === id);
        console.log(use.firstname);
        setUser(user.filter(use=> use.id !== id));
        
      
        
    }
    

  return (
    <div>
        <div className="bg-image">
        <Header
            setIsAdding={setIsAdding}
        />
        {!isAdding && !isEditing && (
            <>
            <div>
                <button className='button1' onClick = {()=> setIsAdding(true)}>Add User</button>
            </div>
            <div>
                <List

                    user = {user}
                    setUser={setUser}
                    handleEdit = {handleEdit}
                    handleDelete = {handleDelete}
                   
                    
                />
               
            </div>
            </>
        )}
        {isAdding && (
            <>
                <Add
                user = {user}
                setUser = {setUser}
                isAdding = {isAdding}
                setIsAdding = {setIsAdding}
                />
            </>
        )}
        {isEditing && (
            <>
                <Add
                user = {user}
                setUser = {setUser}
                selectedUser = {selectedUser}
                isEditing = {isEditing}
                setIsEditing = {setIsEditing}
                />
            </>
        )}

       
       
        </div>
    </div>
  )
}

export default Dashboard