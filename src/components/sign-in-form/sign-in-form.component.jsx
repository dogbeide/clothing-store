import { useState, useContext } from "react";
import { 
  signInWithGooglePopup ,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss'
import ErrorMsg, { getErrorMsg } from "../error-msg/error-msg.component";
import { UserContext } from "../../contexts/user.contexts";

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMsg, setErrorMsg] = useState('');
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user)
      resetFormFields();
      setErrorMsg('');
    } catch (error) {
      const msg = getErrorMsg(error);
      setErrorMsg(msg);
    }
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='email' 
          type='email'
          name="email"
          value={email}
          onChange={onChangeHandler}
          required
        />
        <FormInput 
          label='password' 
          type='password'
          name='password'
          value={password}
          onChange={onChangeHandler}
          required
        />
        <div className="buttons-container">
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
        </div>
        <ErrorMsg errorMsg={errorMsg} />
      </form>
    </div>
      
  )
}

export default SignInForm