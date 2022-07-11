import { useNavigate } from "react-router-dom";

import { RegisterForm } from "../components/RegisterForm";

const Register = () => {
    const navigate = useNavigate();

    return(
        <>
            <RegisterForm/>
        </>
    );
};

export { Register };
