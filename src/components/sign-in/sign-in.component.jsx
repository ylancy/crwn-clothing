import { useState, useContext } from 'react';
import { createUserDocFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utiles/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button';
// import { UserContext } from '../../contexts/user.context';
import "./sign-in.style.scss"

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    // const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // setCurrentUser(user);
        // await createUserDocFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break
                case 'auth/user-not-found':
                    alert('no user with this email')
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    return (
        <div>
            <h2>Already have an account?</h2>
            <span> Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='email' type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;