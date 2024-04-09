import {useState} from 'react'

import {
  MainContainer,
  InContainer,
  Paragraph,
  InputEl,
  ErrMsg,
  MainHead,
} from './styledComponents'

const PasswordValidator = () => {
  const [passInp, updatePass] = useState('')
  const [errMsgState, updateErrMsgState] = useState(true)

  const onChangeInput = event => {
    const newPass = event.target.value
    updatePass(newPass)
    if (newPass.length >= 8) {
      updateErrMsgState(false)
    } else {
      updateErrMsgState(true)
    }
  }

  return (
    <MainContainer>
      <InContainer>
        <MainHead>Password Validator</MainHead>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputEl type="password" onChange={onChangeInput} value={passInp} />
        {errMsgState ? (
          <ErrMsg>Your password must be at least 8 characters</ErrMsg>
        ) : null}
      </InContainer>
    </MainContainer>
  )
}

export default PasswordValidator
