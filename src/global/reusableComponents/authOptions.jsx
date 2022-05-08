import  React  from 'react';
import { IconButton, Button } from "@material-ui/core";
import googleImage from "../images/Google.svg"
import microsoftImage from "../images/Microsoft.svg"
import appleImage from "../images/Icloud.svg"
import { signImage } from "../style/styleStore/imgStyle";
import FirebaseService from "../../services/firebaseService";
import "../css/global.css"


const AuthOptions = () => {
    return(
        <>
        <div className="dash">---------------------------------------------------</div>
        <Button
        onClick={event => {FirebaseService.SignupGoogle()}}

        > {
            <img src = {googleImage}
            style = {signImage.type}

            />
            } </Button>
        <Button> {
            <img src = {appleImage}
            style = {signImage.type}
            
            />
            } </Button>
        <Button> {
            <img src = {microsoftImage} 
            style = {signImage.type}
            
            />
            } </Button>
        </>
    )
}

export default AuthOptions;