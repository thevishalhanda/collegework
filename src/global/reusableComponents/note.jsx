import React , {useState} from "react"
import { Button } from '@material-ui/core';
import { MdDeleteForever } from 'react-icons/md';
import "../css/global.css"
import { btnStyle } from '../style/styleStore/buttonStyle';
import encryption from "../../services/encryption/encryption"
// import StringCrypto from "string-crypto";

const Note = ({ id, text, date, handleDeleteNote }) => {

  const [data,setData] = useState("");

  // const {encryptString, decryptString} = new StringCrypto();
  const saveNotes = () => {
    // let ds = encryptString(data);
    // console.log(ds);
  }


 
 
  return (
    <div className="note">
      <textarea className="notes-text" cols="10" rows="8" onChange={event => {setData(event.target.value)}}>
        {text}
      </textarea>
      <div className="note-footer">
        <small>{date}</small>
        
        <Button
         
        style = {btnStyle.type3}
        onClick = {saveNotes}
        > Save </Button>
        
        {/* <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        /> */}
      </div>
    </div>
  );
};

export default Note;