import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  useEffect(() => {
    // const fetchRedirectData = async () => {
    //   console.log('before')
    //   try {
    //     const result = await getRedirectResult(auth);
    //     // console.log(result);
    //   } catch (error) {
    //     console.log('ERR', error)
    //   }
    // }
    // fetchRedirectData();
  }, []);

  

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>SIGNINSIGNIN</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
    </div>
  )
}

export default SignIn;