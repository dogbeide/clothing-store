import { useState } from "react";
import { useDispatch } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import ErrorMsg, { getErrorMsg } from "../error-msg/error-msg.component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action.js";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMsg, setErrorMsg] = useState("");
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    // await signInWithGooglePopup();
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
      setErrorMsg("");
      setErrorMsg("");
    } catch (error) {
      const msg = getErrorMsg(error);
      setErrorMsg(msg);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          required
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
        <ErrorMsg errorMsg={errorMsg} />
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
