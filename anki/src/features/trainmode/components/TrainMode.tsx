import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { StatusBar } from "components/StatusBar";
import ProgressBar from "./ProgressBar";
import { ButtonSwitch } from "components/ButtonSwitch";

import "./TrainMode.css"

const TrainMode = () => {
    const [theme, ] = useContext(ThemeContext)

    return(
        <div className="trainmode-and-status-bar">
            <StatusBar status={'the "Spanish" deck: training mode'}/>
            <div className="trainmode">
                <ProgressBar current={4} total={14}/>
                <div className='shadow-out-bottom question-answer' style={{
                    backgroundColor: theme.middleground,
                    color: theme.text,
                }}>
                    first derivative of sin(x)?

                    
                </div>
            </div>
        </div>
    )
}

export { TrainMode }
