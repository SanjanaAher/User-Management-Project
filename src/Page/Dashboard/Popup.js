import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css'

 
let Pop;
 export default Pop = ({id, handleDelete}) => {
 return(
  <Popup
    trigger={<button className="button2"> Delete </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Are you sure want to delete? </div>
       
        <div className="actions">
        
            <button className="button2" onClick={() => {handleDelete(id);}}> Yes </button>
            &nbsp; 
            &nbsp; 
            

          
          <button
            className="button2"
            onClick={() => {
              close();
            }}
          >
            No
          </button>
        </div>
      </div>
    )}
  </Popup>

 );
}