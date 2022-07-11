import { useNavigate } from "react-router-dom";

import { LoginForm } from "../components/LoginForm";

const Login = () => {
    const navigate = useNavigate();

    return(
        <>
            <LoginForm/>
        </>
    );
};

export { Login };
