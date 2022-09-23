import React, { useState ,Suspense} from 'react'
import {userData} from '../../data/index' 
import Add from './Add'
import Header from './Header'
import List from './List'
import './Dashboard.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useTranslation} from 'react-i18next';





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

    const {t} = useTranslation(["home"]);
    

  return (
    <Suspense fallback={null}>
    <div id='font'>
        <div className="bg-image">
        <Header
            setIsAdding={setIsAdding}
        />
        {!isAdding && !isEditing && (
            <>
            
                <button className='button1' onClick = {()=> setIsAdding(true)}>{t("Add User")}</button>
            
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
    </Suspense>
  )
}

export default Dashboard