import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [error,setError] =useState('')
    const [password, setPassword] = useState('');

    const auth = getAuth();
    console.log(user);
    

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

       return signInWithPopup(auth, googleProvider)
            
    }
    const handleRegistration = ()=> {
        createUserWithEmailAndPassword (auth,email,password)
      .then(result=>{
        setUser(result.user)
       window.location.reload();
        
      })
      .catch(error=>{
        setError(error.message);
      })
      }
    
      const handleSignIn = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=> {
            setUser(result.user)
            
        })
        .catch((error) =>{
          setError(error.message);
        })
      }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    useEffect(() => {
       const unsubscribed= onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
       });
       return () => unsubscribed;
    },[auth])
    return {
        user,
        signInUsingGoogle,
        logOut,
        error,
        handleRegistration,
        setEmail,
        setPassword,
        handleSignIn
    }
}
export default useFirebase;