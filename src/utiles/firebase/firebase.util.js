import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, checkActionCode } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCET1HL8v1DP0-pWBuMZUjje98S3kfMpVI",
    authDomain: "crwn-clothing-db-f1f95.firebaseapp.com",
    projectId: "crwn-clothing-db-f1f95",
    storageBucket: "crwn-clothing-db-f1f95.appspot.com",
    messagingSenderId: "518431518574",
    appId: "1:518431518574:web:49b2a64bdf222b03a01b7f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createAt })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}

