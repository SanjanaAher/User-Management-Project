import React, {useEffect, useState, useRef} from 'react'
import './Add.css';
import {useTranslation} from 'react-i18next';

function Add(props) {
  const {t} = useTranslation(["home"]);

  // for adding
  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [status, setMyStatus] = useState("");
  const [role,setMyRole] = useState("");
  const textInput = useRef(null);
  
  // for updating 
  const [updatefirstname,setUpdateFirstName] = useState(props.selectedUser?.firstname);
  const [updatelastname,setUpdateLastName] = useState(props.selectedUser?.lastname);
  const [updateemail,setUpdateEmail] = useState(props.selectedUser?.email);
  const [updatestatus, setUpdateMyStatus] = useState(props.selectedUser?.status);
  const [updaterole,setUpdateMyRole] = useState(props.selectedUser?.role);
  
  
  useEffect(()=> {
    textInput.current.focus();
  }, [])

  
  const handleAdd = e => {
    e.preventDefault();
    if(!firstname || !lastname || !email || !role || !status){
      alert('All the fields are required');
    }

    const id = props.user.id + 1;
    const newUser = {
      id,firstname,lastname,email,status,role
    }
    props.user.push(newUser);
    props.setUser(props.user);
    props.setIsAdding(false);
  }


  const handleUpdate = x => {
    const id = props.selectedUser.id;
    x.preventDefault();
    if(!updatefirstname || !updatelastname || !updateemail || !updaterole || !updatestatus){
      alert('All the fields are required');
    }

    const use = {
      id,updatefirstname,updatelastname,updateemail,updatestatus,updaterole
    }
  
    for (let i=0;i<props.user.length;i++) {
      if (props.user[i].id===id){
        props.user.splice(i,1,{...use});
        props.setUser(props.user);
        break;
      }
    }
    props.setIsEditing(false);
  }

  if (props.isAdding) {
  return (
    <div>
      <form onSubmit = {handleAdd}>
        <h1 className='edit-heading'>{t("Add User")}</h1>
        <label htmlFor='firstname'>{t("First Name")}</label>
        <input id='firstname' type='text' ref={textInput} name= 'firstname' value={firstname} onChange={e => setFirstName(e.target.value)}/>
        
        <label htmlFor='lastname'>{t("Last Name")}</label>
        <input id='lastname' type='text' name= 'lastname' value={lastname} onChange={e => setLastName(e.target.value)}/>
        
        <label htmlFor='email'>{t("Email")} </label>
        <input id='email' type='text' name= 'email' value={email} onChange={e => setEmail(e.target.value)}/>
        
        <label htmlFor='status'>{t("Status")}</label>
        <select value={status} name = "status" onChange={e => setMyStatus(e.target.value)}>
          <option>--select--</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        
        </select>

        <label htmlFor='role'>{t("Role")}</label>
        <select value={role} name = "role" onChange={e => setMyRole(e.target.value)}>
          <option>--select--</option>
          <option value="Engineer">Engineer</option>
          <option value="Senior Engineer">Senior Engineer</option>
        
        </select>

          <input className='button3' type='submit' value = {t('Add')}/> 
          <br/>
          <input className='button3' type = 'button' value = {t('Cancel')} onClick= {() => props.setIsAdding(false)}/>
      </form>
    </div>
  )
  }

  if (props.isEditing) {
    return (
      <div>
        <form onSubmit = {handleUpdate} className='formedit'>
          <h1 className='edit-heading'>{t("Edit User")}</h1>
          <label className='label1' htmlFor='updatefirstname'>{t("First Name")} </label>
          <input id='updatefirstname' type='text' ref={textInput} name= 'updatefirstname' value={updatefirstname} onChange={e => setUpdateFirstName(e.target.value)}/>
          
          <label htmlFor='updatelastname'>{t("Last Name")}</label>
          <input id='updatelastname' type='text' name= 'updatelastname' value={updatelastname} onChange={e => setUpdateLastName(e.target.value)}/>
        
          <label htmlFor='email'>{t("Email")} </label>
          <input id='updateemail' type='text' name= 'updateemail' value={updateemail} onChange={e => setUpdateEmail(e.target.value)}/>
         
          
          <label htmlFor='updatestatus'>{t("Status")}</label>
          <select value={updatestatus} name = "updatestatus" onChange={e => setUpdateMyStatus(e.target.value)}>
            <option>--select--</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          
          </select>
        
  
          <label htmlFor='updaterole'>{t("Role")}</label>
          <select value={updaterole} name = "updaterole" onChange={e => setUpdateMyRole(e.target.value)}>
            <option>--select--</option>
            <option value="Engineer">Engineer</option>
            <option value="Senior Engineer">Senior Engineer</option>
          
          </select>
          
  
          <div>
            <input className='button3' type='submit' value = {t('Update')}/>
            <input  className='button3' type = 'button' value = {t('Cancel')} onClick = {() => props.setIsEditing(false)}/>
          </div>
        </form>
      </div>
    )
  }
}

export default Add