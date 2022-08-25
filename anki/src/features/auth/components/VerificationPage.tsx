// TODO: get "code" param w/ useParams, then make request to the API
//       in useEffect to verify email.
//       if successful, tell the user it's verified, otherwise tell
//       them that the code is invalid

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { verifyEmailWithCode } from "../api/verify";
import { AlertWindow, ButtonSwitch } from "components";

const VerificationPage = () => {
    const { code } = useParams();
    const navigate = useNavigate();
    const [success, setSuccess] = useState<boolean>(false);
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        verifyEmailWithCode(code!)
            .then(data => {
                setSuccess(true);
                if (data.code === 'VERIFIED') {
                    setMessage('Your account was successfully verified!\n\nYou can sign in now.');
                } else if (data.code === 'VERIFIED_ALREADY') {
                    setMessage('Your account has already been verified.\n\nYou can sign in now.');
                }
            })
            .catch(err => {
                if (err.response.data.code === 'VALIDATION') {
                    setMessage('The verification code is invalid.');
                } else if (err.response.data.code === 'AV_CODE_NOT_VALID') {
                    setMessage('The verification code does not match any account.');
                }
            })
    }, [code]);

    return(
        <AlertWindow>
            {
                !!message && message
            }
            {
                success &&
                <ButtonSwitch text={'proceed to sign in'}
                              is_on={false}
                              onClick={() => {
                                  navigate('/auth/login');
                              }}
                              width={240} height={32} fontSize={16}/>
            }
        </AlertWindow>
    );
};

export { VerificationPage };
