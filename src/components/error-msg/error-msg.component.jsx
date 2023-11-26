import { ErrorMsg_ } from './error-msg.styles.jsx'

export const getErrorMsg = (error) => {
  const { code } = error;
  if (code) {
    const rawCode = code.substring(code.indexOf('/') + 1);
    const msg = 'Error: ' + rawCode.replace(/-/g, ' ');
    return msg;
  } else {
    console.log('ASDF', error)
    return 'Error: Unknown'
  }
}

const ErrorMsg = ({ errorMsg }) => {
  return (
    errorMsg ? 
      <ErrorMsg_>{errorMsg}</ErrorMsg_> : 
      null
  );
}

export default ErrorMsg;