import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth'
import { auth, provider } from "./firebaseStore"



class FirebaseService {
    static SignupWithEmailPassword(email, password) {
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            console.log(res.user)
        })
            .catch(err => console(err.message))  }

    static SignInWithEmailAndPassword(email, password) {
         signInWithEmailAndPassword(auth, email,password).then((res) => {
             console.log(res)
         }).catch(err => {
             console.log(err)
         })
    }
    
    static SignupGoogle() {
          signInWithPopup(auth, provider).then((res) => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    


}


export default FirebaseService;