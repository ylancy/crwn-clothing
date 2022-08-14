import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocFromAuth } from "../../utiles/firebase/firebase.util";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up/sign-up.component";

const SignIn = () => {

    // useEffect(() => {
    //     const func = async () => {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocFromAuth(response.user);
    //         }
    //     };
    //     func();
    // }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}> Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn;