import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import ErrorMsg, { getErrorMsg } from "../error-msg/error-msg.component";
import { SignUpContainer } from './sign-up-form.styles.jsx'

const defaultFormFields = {
  'displayName': '',
  'email': '',
  'password': '',
  'confirmPassword': ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMsg, setErrorMsg] = useState('');
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields, 
      [name]: value 
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      setErrorMsg('Error: passwords do not match');
      return;
    } else {
      setErrorMsg('');
    }
    
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      const msg = getErrorMsg(error);
      setErrorMsg(msg);
    }
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign Up with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type="text" onChange={handleChange} name="displayName" value={displayName} required />
        <FormInput label='Email' type="email" onChange={handleChange} name="email" value={email} required />
        <FormInput label='Password' type="password" onChange={handleChange} name="password" value={password} required />
        <FormInput label='Confirm Password' type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

        <Button type="submit">Sign Up</Button>
        <ErrorMsg errorMsg={errorMsg} />
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm;
