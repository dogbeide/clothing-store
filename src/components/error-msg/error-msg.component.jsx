import './error-msg.styles.scss'

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
      <div className='error-msg'>{errorMsg}</div> : 
      null
  );
}

export default ErrorMsg;