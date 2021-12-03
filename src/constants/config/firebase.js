import {initializeApp} from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, signInWithPopup, FacebookAuthProvider,
    GoogleAuthProvider,
} from "firebase/auth";


const config = {
    apiKey: "AIzaSyCVCS3T5Vh91EATXdHqQyHjh-J1-7ja374",
    authDomain: "tiro-e-teng.firebaseapp.com",
    projectId: "tiro-e-teng",
    storageBucket: "tiro-e-teng.appspot.com",
    messagingSenderId: "965045660530",
    appId: "1:965045660530:web:10e23d13544353a5734beb"
};

export const firebase = initializeApp(config)


export const auth = getAuth();
let user;
const faceBookProvider = new FacebookAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();


export function createUser(username,email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export function signInFb() {
    return signInWithPopup(auth, faceBookProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });
}

export function signInGoogle() {
    return signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

export function signInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export function signOutFun() {
    return signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
