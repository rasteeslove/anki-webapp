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
                    <div className="feedback-holder">
                        <ButtonSwitch is_on={false} text={'Knew it'} width={180} height={40} color={'rgb(124, 255, 62, 0.6)'}/>
                        <ButtonSwitch is_on={false} text={'Not there yet'} width={180} height={40} color={'rgb(255, 96, 62, 0.6)'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { TrainMode }
