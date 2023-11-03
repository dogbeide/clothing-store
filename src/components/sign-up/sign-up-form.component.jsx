import { useState } from "react";
import {
  auth, 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

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
      if (error.code == 'auth/email-already-in-use') {
        setErrorMsg('Error: email already in use');
      }
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Sign Up with Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type="text" onChange={handleChange} name="displayName" value={displayName} required />
        <FormInput label='Email' type="email" onChange={handleChange} name="email" value={email} required />
        <FormInput label='Password' type="password" onChange={handleChange} name="password" value={password} required />
        <FormInput label='Confirm Password' type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

        <button type="submit">Sign Up</button>
        {errorMsg ? <div style={{'color': 'red'}}>{errorMsg}</div> : null}
      </form>
    </div>
  )
}

export default SignUpForm;
