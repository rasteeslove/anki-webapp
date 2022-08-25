import React from "react";
import { MiddleGroundPanel } from "./MiddleGroundPanel";
import './styles/AlertWindow.scss';

interface Props {
    children?: React.ReactNode,
}

const AlertWindow = (props: Props) => {
    return(
        <MiddleGroundPanel className='alert-container shadow-out-bottom'>
            <div className='alert-main'>
                { props.children }
            </div>
        </MiddleGroundPanel>
    );
};

export { AlertWindow };
