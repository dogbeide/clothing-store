import { ErrorMsg_ } from './error-msg.styles.jsx'

export const getErrorMsg = (error) => {
  const { code } = error
  const rawCode = code.substring(code.indexOf('/') + 1);
  const msg = 'Error: ' + rawCode.replace(/-/g, ' ');
  // if (error.code == 'auth/email-already-in-use') {
      //   setErrorMsg('Error: email already in use');
      // }
      // console.log(error)
  return msg;
}

const ErrorMsg = ({ errorMsg }) => {
  return (
    errorMsg ? 
      <ErrorMsg_>{errorMsg}</ErrorMsg_> : 
      null
  );
}

export default ErrorMsg;