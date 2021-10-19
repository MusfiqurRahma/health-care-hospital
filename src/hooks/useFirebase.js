import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signInWithEmailAndPassword,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [error,setError] =useState('')
    const [password, setPassword] = useState('');

    const auth = getAuth();
    

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

       return signInWithPopup(auth, googleProvider)
            
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
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
    },[])
    return {
        user,
        signInUsingGoogle,
        logOut,
        processLogin,
        error
    }
}
export default useFirebase;