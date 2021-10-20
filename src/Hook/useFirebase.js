import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [isLogin, setIslogin] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    const handleEmail = e => {
        setEmail(e.target.value);

    }
    const handlePassword = e => {
        if (e.target.value.length < 6) {
            setError('Please enter at least 6 characters')
        }
        else {
            setPassword(e.target.value);
        }

    };

    const handleRegistrationForm = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
                setError('');

            }).catch(error => {
                setError(error.message);
            })

    }


    const toggleLogin = e => {
        setIslogin(e.target.checked)
    }

    // email and password


    const handleLoginEmailPass = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
            }).catch((error) => {
                setError(error.message)
            });
    }



    return {
        user,
        googleSignIn,
        logOut,
        handleEmail,
        handlePassword,
        handleRegistrationForm,
        error,
        toggleLogin,
        isLogin,
        handleLoginEmailPass,
    }
}
export default useFirebase;